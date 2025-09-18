import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Users } from 'lucide-react';

interface UserActivityTableProps {
  data: Array<{ name: string; email: string; activities: number }>;
}

export const UserActivityTable = ({ data }: UserActivityTableProps) => {
  const getRankBadgeVariant = (index: number) => {
    switch (index) {
      case 0:
        return "default"; // Gold
      case 1:
        return "secondary"; // Silver
      case 2:
        return "outline"; // Bronze
      default:
        return "outline";
    }
  };

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return "🥇";
      case 1:
        return "🥈";
      case 2:
        return "🥉";
      default:
        return `${index + 1}º`;
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Users className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Usuários Mais Ativos</h3>
      </div>
      
      {data.length === 0 ? (
        <div className="flex items-center justify-center h-64 text-muted-foreground">
          Nenhum dado disponível
        </div>
      ) : (
        <div className="space-y-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">Rank</TableHead>
                <TableHead>Usuário</TableHead>
                <TableHead className="text-right">Atividades</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((user, index) => (
                <TableRow key={user.email}>
                  <TableCell>
                    <Badge variant={getRankBadgeVariant(index)} className="text-xs">
                      {getRankIcon(index)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium text-sm">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {user.activities}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </Card>
  );
};