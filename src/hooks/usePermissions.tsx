import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { canUserViewDepartmentProcesses } from '@/utils/departmentMapping';

interface UserProfile {
  id: string;
  user_id: string;
  full_name: string;
  email: string;
  department: string;
  role: string;
}

export const usePermissions = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (user) {
          const { data: profileData, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('user_id', user.id)
            .single();

          if (error) {
            console.error('Erro ao buscar perfil:', error);
          } else {
            setProfile(profileData);
          }
        }
      } catch (error) {
        console.error('Erro ao verificar usuário:', error);
      } finally {
        setLoading(false);
      }
    };

    getProfile();

    // Listener para mudanças de autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_OUT') {
          setProfile(null);
        } else if (event === 'SIGNED_IN' && session?.user) {
          getProfile();
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const canViewProcesses = (departmentName: string): boolean => {
    if (!profile) return false;
    return canUserViewDepartmentProcesses(
      profile.department,
      departmentName,
      profile.role === 'admin'
    );
  };

  const canViewStructure = (): boolean => {
    // Estrutura do departamento sempre visível para todos
    return true;
  };

  const canViewFlow = (): boolean => {
    // Fluxo do departamento sempre visível para todos
    return true;
  };

  return {
    profile,
    loading,
    canViewProcesses,
    canViewStructure,
    canViewFlow,
    isAdmin: profile?.role === 'admin',
    userDepartment: profile?.department || null,
    isAuthenticated: !!profile
  };
};