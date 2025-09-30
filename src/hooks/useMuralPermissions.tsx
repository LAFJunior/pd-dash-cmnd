import { usePermissions } from './usePermissions';

const MURAL_ADMIN_EMAILS = [
  'luiz.ferreira@grupooscar.com.br',
  'rh@grupooscar.com.br'
];

export const useMuralPermissions = () => {
  const { profile, loading } = usePermissions();

  const isMuralAdmin = profile?.email ? MURAL_ADMIN_EMAILS.includes(profile.email) : false;

  return {
    isMuralAdmin,
    loading,
    profile
  };
};
