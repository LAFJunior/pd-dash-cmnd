import { Card } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FileDown } from 'lucide-react';

interface PDFDownloadsChartProps {
  data: Array<{ date: string; downloads: number }>;
}

export const PDFDownloadsChart = ({ data }: PDFDownloadsChartProps) => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <FileDown className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Downloads de PDFs por Período</h3>
      </div>
      
      {data.length === 0 ? (
        <div className="flex items-center justify-center h-64 text-muted-foreground">
          Nenhum dado disponível
        </div>
      ) : (
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                fontSize={12}
              />
              <YAxis fontSize={12} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px'
                }}
                labelStyle={{ color: 'hsl(var(--foreground))' }}
              />
              <Line 
                type="monotone" 
                dataKey="downloads" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: 'hsl(var(--primary))' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </Card>
  );
};