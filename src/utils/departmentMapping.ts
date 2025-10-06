// Mapeamento entre departamentos do usuário e nomes na aplicação
export const DEPARTMENT_MAPPING: Record<string, string[]> = {
  'ecommerce': ['E-Commerce', 'e-commerce'],
  'financeiro': ['Financeiro', 'Financeiro Varejo', 'financeiro varejo'],
  'rh': ['Recursos Humanos', 'Recursos Humanos (RH)'],
  'dp': ['Departamento Pessoal', 'Departamento Pessoal (DP)'],
  'auditoria': ['Auditoria'],
  'controladoria': ['Controladoria'],
  'contabil': ['Contábil'],
  'fiscal': ['Fiscal'],
  'compras': ['Compras'],
  'defeito': ['Defeito'],
  'cd': ['São José dos Campos', 'CD/Operações (S. J. dos Campos)', 'São José Campos', 'CD/Operações', 'sao jose dos campos', 'cd operacoes']
};

// Função para verificar se usuário pode ver processos do departamento
export const canUserViewDepartmentProcesses = (
  userDepartment: string | null,
  targetDepartment: string,
  isAdmin: boolean = false
): boolean => {
  if (isAdmin) return true;
  if (!userDepartment) return false;

  // Normalizar nomes para comparação
  const normalizeString = (str: string) => 
    str.toLowerCase()
      .replace(/[áàâã]/g, 'a')
      .replace(/[éêë]/g, 'e')
      .replace(/[íîï]/g, 'i')
      .replace(/[óôõ]/g, 'o')
      .replace(/[úû]/g, 'u')
      .replace(/[ç]/g, 'c')
      .replace(/[^a-z0-9]/g, '');

  const normalizedUserDept = normalizeString(userDepartment);
  const normalizedTargetDept = normalizeString(targetDepartment);

  // Verificar correspondência direta
  if (normalizedUserDept === normalizedTargetDept) return true;

  // Verificar no mapeamento
  for (const [key, variations] of Object.entries(DEPARTMENT_MAPPING)) {
    const normalizedKey = normalizeString(key);
    const normalizedVariations = variations.map(normalizeString);

    if (normalizedKey === normalizedUserDept || normalizedVariations.includes(normalizedUserDept)) {
      if (normalizedKey === normalizedTargetDept || normalizedVariations.includes(normalizedTargetDept)) {
        return true;
      }
    }
  }

  return false;
};