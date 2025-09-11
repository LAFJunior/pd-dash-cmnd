import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { usePermissions } from '@/hooks/usePermissions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Shield, Key, RefreshCw } from 'lucide-react';

interface UserProfile {
  id: string;
  user_id: string;
  full_name: string;
  email: string;
  department: string;
  role: string;
}

const Admin = () => {
  const { isSuperAdmin } = usePermissions();
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [resetting, setResetting] = useState<string | null>(null);
  const [newPassword, setNewPassword] = useState('');
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  useEffect(() => {
    if (!isSuperAdmin) return;
    
    const fetchUsers = async () => {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .order('full_name');

        if (error) {
          console.error('Erro ao buscar usuários:', error);
          toast.error('Erro ao carregar usuários');
        } else {
          setUsers(data || []);
        }
      } catch (error) {
        console.error('Erro:', error);
        toast.error('Erro ao carregar usuários');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [isSuperAdmin]);

  const handleResetPassword = async (userId: string) => {
    if (!newPassword || newPassword.length < 6) {
      toast.error('A senha deve ter pelo menos 6 caracteres');
      return;
    }

    setResetting(userId);
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      const response = await fetch('/supabase/functions/v1/reset-user-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session?.access_token}`,
        },
        body: JSON.stringify({
          userId,
          newPassword
        })
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Senha resetada com sucesso!');
        setNewPassword('');
        setSelectedUser(null);
      } else {
        toast.error(result.error || 'Erro ao resetar senha');
      }
    } catch (error) {
      console.error('Erro ao resetar senha:', error);
      toast.error('Erro ao resetar senha');
    } finally {
      setResetting(null);
    }
  };

  if (!isSuperAdmin) {
    return (
      <div className="container mx-auto p-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Shield className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Acesso Negado</h3>
              <p className="text-gray-500">Você não tem permissão para acessar esta página.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center">
          <RefreshCw className="animate-spin h-8 w-8 text-blue-600" />
          <span className="ml-2">Carregando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          <Shield className="h-8 w-8" />
          Administração do Sistema
        </h1>
        <p className="text-gray-600 mt-2">Gerenciamento de usuários e senhas</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              Reset de Senhas de Usuários
            </CardTitle>
            <CardDescription>
              Como super administrador, você pode resetar as senhas de qualquer usuário do sistema.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium">{user.full_name}</h3>
                    <p className="text-sm text-gray-500">{user.email}</p>
                    <p className="text-xs text-gray-400">{user.department} • {user.role}</p>
                  </div>
                  
                  {selectedUser === user.user_id ? (
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="newPassword" className="text-sm">Nova Senha</Label>
                        <Input
                          id="newPassword"
                          type="password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="Digite a nova senha"
                          className="w-48"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="h-5"></div> {/* Spacer for alignment */}
                        <div className="flex gap-2">
                          <Button
                            onClick={() => handleResetPassword(user.user_id)}
                            disabled={resetting === user.user_id}
                            size="sm"
                          >
                            {resetting === user.user_id ? (
                              <RefreshCw className="animate-spin h-4 w-4" />
                            ) : (
                              'Confirmar'
                            )}
                          </Button>
                          <Button
                            onClick={() => {
                              setSelectedUser(null);
                              setNewPassword('');
                            }}
                            variant="outline"
                            size="sm"
                          >
                            Cancelar
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Button
                      onClick={() => setSelectedUser(user.user_id)}
                      variant="outline"
                      size="sm"
                    >
                      Resetar Senha
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;