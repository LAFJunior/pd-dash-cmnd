import { useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

// Generate a session ID to avoid duplicate tracking in the same session
const getSessionId = () => {
  let sessionId = sessionStorage.getItem('analytics_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('analytics_session_id', sessionId);
  }
  return sessionId;
};

export const useAnalytics = () => {
  const trackDepartmentAccess = useCallback(async (departmentName: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const sessionId = getSessionId();
      
      // Check if already tracked in this session
      const existingEntry = sessionStorage.getItem(`dept_${departmentName}_${sessionId}`);
      if (existingEntry) return;

      await supabase.from('department_analytics').insert({
        user_id: user.id,
        department_name: departmentName,
        session_id: sessionId
      });

      sessionStorage.setItem(`dept_${departmentName}_${sessionId}`, 'tracked');
    } catch (error) {
      console.error('Error tracking department access:', error);
    }
  }, []);

  const trackVideoPlay = useCallback(async (
    videoFileName: string, 
    videoTitle: string, 
    departmentName?: string
  ) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      await supabase.from('video_analytics').insert({
        user_id: user.id,
        video_file_name: videoFileName,
        video_title: videoTitle,
        department_name: departmentName,
        session_id: getSessionId()
      });
    } catch (error) {
      console.error('Error tracking video play:', error);
    }
  }, []);

  const trackVideoCompletion = useCallback(async (
    videoFileName: string,
    durationSeconds: number
  ) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Find the most recent play record for this video and user
      const { data: playRecord } = await supabase
        .from('video_analytics')
        .select('id')
        .eq('user_id', user.id)
        .eq('video_file_name', videoFileName)
        .order('play_started_at', { ascending: false })
        .limit(1)
        .single();

      if (playRecord) {
        await supabase
          .from('video_analytics')
          .update({
            play_duration_seconds: durationSeconds,
            completed: true
          })
          .eq('id', playRecord.id);
      }
    } catch (error) {
      console.error('Error tracking video completion:', error);
    }
  }, []);

  const trackPDFDownload = useCallback(async (
    pdfTitle: string,
    pdfUrl: string,
    departmentName?: string
  ) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      await supabase.from('pdf_analytics').insert({
        user_id: user.id,
        pdf_title: pdfTitle,
        pdf_url: pdfUrl,
        department_name: departmentName,
        session_id: getSessionId()
      });
    } catch (error) {
      console.error('Error tracking PDF download:', error);
    }
  }, []);

  return {
    trackDepartmentAccess,
    trackVideoPlay,
    trackVideoCompletion,
    trackPDFDownload
  };
};