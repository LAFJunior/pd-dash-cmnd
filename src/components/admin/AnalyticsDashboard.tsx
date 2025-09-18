import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { MetricsCard } from './MetricsCard';
import { DepartmentChart } from './DepartmentChart';
import { VideoAnalytics } from './VideoAnalytics';
import { PDFDownloadsChart } from './PDFDownloadsChart';
import { UserActivityTable } from './UserActivityTable';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Users, Building2, Play, FileDown, TrendingUp } from 'lucide-react';
import { format, subDays, startOfDay, endOfDay } from 'date-fns';

interface AnalyticsData {
  totalUsers: number;
  departmentAccesses: number;
  videoPlays: number;
  pdfDownloads: number;
  topDepartments: Array<{ name: string; count: number }>;
  topVideos: Array<{ title: string; plays: number; completion_rate: number }>;
  dailyPdfDownloads: Array<{ date: string; downloads: number }>;
  activeUsers: Array<{ name: string; email: string; activities: number }>;
}

export const AnalyticsDashboard = () => {
  const [data, setData] = useState<AnalyticsData>({
    totalUsers: 0,
    departmentAccesses: 0,
    videoPlays: 0,
    pdfDownloads: 0,
    topDepartments: [],
    topVideos: [],
    dailyPdfDownloads: [],
    activeUsers: []
  });
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState<string>('7');

  useEffect(() => {
    fetchAnalyticsData();
  }, [period]);

  const fetchAnalyticsData = async () => {
    try {
      setLoading(true);
      const days = parseInt(period);
      const startDate = startOfDay(subDays(new Date(), days));
      const endDate = endOfDay(new Date());

      // Fetch basic metrics
      const [
        { count: totalUsers },
        { count: departmentAccesses },
        { count: videoPlays },
        { count: pdfDownloads }
      ] = await Promise.all([
        supabase.from('profiles').select('*', { count: 'exact', head: true }),
        supabase
          .from('department_analytics')
          .select('*', { count: 'exact', head: true })
          .gte('accessed_at', startDate.toISOString())
          .lte('accessed_at', endDate.toISOString()),
        supabase
          .from('video_analytics')
          .select('*', { count: 'exact', head: true })
          .gte('play_started_at', startDate.toISOString())
          .lte('play_started_at', endDate.toISOString()),
        supabase
          .from('pdf_analytics')
          .select('*', { count: 'exact', head: true })
          .gte('downloaded_at', startDate.toISOString())
          .lte('downloaded_at', endDate.toISOString())
      ]);

      // Fetch top departments
      const { data: departmentData } = await supabase
        .from('department_analytics')
        .select('department_name')
        .gte('accessed_at', startDate.toISOString())
        .lte('accessed_at', endDate.toISOString());

      const departmentCounts = (departmentData || []).reduce((acc, item) => {
        acc[item.department_name] = (acc[item.department_name] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      const topDepartments = Object.entries(departmentCounts)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      // Fetch top videos with completion rates
      const { data: videoData } = await supabase
        .from('video_analytics')
        .select('video_title, completed')
        .gte('play_started_at', startDate.toISOString())
        .lte('play_started_at', endDate.toISOString());

      const videoCounts = (videoData || []).reduce((acc, item) => {
        if (!acc[item.video_title]) {
          acc[item.video_title] = { plays: 0, completed: 0 };
        }
        acc[item.video_title].plays += 1;
        if (item.completed) {
          acc[item.video_title].completed += 1;
        }
        return acc;
      }, {} as Record<string, { plays: number; completed: number }>);

      const topVideos = Object.entries(videoCounts)
        .map(([title, stats]) => ({
          title,
          plays: stats.plays,
          completion_rate: Math.round((stats.completed / stats.plays) * 100)
        }))
        .sort((a, b) => b.plays - a.plays)
        .slice(0, 5);

      // Fetch daily PDF downloads for chart
      const dailyPdfDownloads = [];
      for (let i = days - 1; i >= 0; i--) {
        const date = subDays(new Date(), i);
        const dayStart = startOfDay(date);
        const dayEnd = endOfDay(date);
        
        const { count } = await supabase
          .from('pdf_analytics')
          .select('*', { count: 'exact', head: true })
          .gte('downloaded_at', dayStart.toISOString())
          .lte('downloaded_at', dayEnd.toISOString());

        dailyPdfDownloads.push({
          date: format(date, 'dd/MM'),
          downloads: count || 0
        });
      }

      // Fetch most active users
      const { data: userActivityData } = await supabase
        .from('profiles')
        .select(`
          full_name,
          email,
          user_id
        `);

      const activeUsers = [];
      if (userActivityData) {
        for (const user of userActivityData.slice(0, 5)) {
          const [
            { count: deptCount },
            { count: videoCount },
            { count: pdfCount }
          ] = await Promise.all([
            supabase
              .from('department_analytics')
              .select('*', { count: 'exact', head: true })
              .eq('user_id', user.user_id)
              .gte('accessed_at', startDate.toISOString())
              .lte('accessed_at', endDate.toISOString()),
            supabase
              .from('video_analytics')
              .select('*', { count: 'exact', head: true })
              .eq('user_id', user.user_id)
              .gte('play_started_at', startDate.toISOString())
              .lte('play_started_at', endDate.toISOString()),
            supabase
              .from('pdf_analytics')
              .select('*', { count: 'exact', head: true })
              .eq('user_id', user.user_id)
              .gte('downloaded_at', startDate.toISOString())
              .lte('downloaded_at', endDate.toISOString())
          ]);

          const totalActivities = (deptCount || 0) + (videoCount || 0) + (pdfCount || 0);
          if (totalActivities > 0) {
            activeUsers.push({
              name: user.full_name,
              email: user.email,
              activities: totalActivities
            });
          }
        }
      }

      activeUsers.sort((a, b) => b.activities - a.activities);

      setData({
        totalUsers: totalUsers || 0,
        departmentAccesses: departmentAccesses || 0,
        videoPlays: videoPlays || 0,
        pdfDownloads: pdfDownloads || 0,
        topDepartments,
        topVideos,
        dailyPdfDownloads,
        activeUsers: activeUsers.slice(0, 5)
      });
    } catch (error) {
      console.error('Error fetching analytics data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <span className="ml-2">Carregando métricas...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with filters */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <TrendingUp className="text-primary" />
            Painel de Métricas
          </h2>
          <p className="text-muted-foreground">Visão geral das atividades do sistema</p>
        </div>
        <Select value={period} onValueChange={setPeriod}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7">Últimos 7 dias</SelectItem>
            <SelectItem value="30">Últimos 30 dias</SelectItem>
            <SelectItem value="90">Últimos 90 dias</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricsCard
          title="Total de Usuários"
          value={data.totalUsers}
          description="Usuários cadastrados"
          icon={Users}
        />
        <MetricsCard
          title="Acessos a Departamentos"
          value={data.departmentAccesses}
          description={`Últimos ${period} dias`}
          icon={Building2}
        />
        <MetricsCard
          title="Reproduções de Vídeos"
          value={data.videoPlays}
          description={`Últimos ${period} dias`}
          icon={Play}
        />
        <MetricsCard
          title="Downloads de PDFs"
          value={data.pdfDownloads}
          description={`Últimos ${period} dias`}
          icon={FileDown}
        />
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DepartmentChart data={data.topDepartments} />
        <VideoAnalytics data={data.topVideos} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PDFDownloadsChart data={data.dailyPdfDownloads} />
        <UserActivityTable data={data.activeUsers} />
      </div>
    </div>
  );
};