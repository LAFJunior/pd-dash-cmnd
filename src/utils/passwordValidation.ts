export interface PasswordValidation {
  isValid: boolean;
  errors: string[];
  strength: 'weak' | 'medium' | 'strong';
}

export const validatePassword = (password: string): PasswordValidation => {
  const errors: string[] = [];
  let score = 0;

  // Validações obrigatórias
  if (password.length < 8) {
    errors.push('Deve ter pelo menos 8 caracteres');
  } else {
    score += 1;
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Deve conter pelo menos uma letra minúscula');
  } else {
    score += 1;
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Deve conter pelo menos uma letra maiúscula');
  } else {
    score += 1;
  }

  if (!/\d/.test(password)) {
    errors.push('Deve conter pelo menos um número');
  } else {
    score += 1;
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Deve conter pelo menos um caractere especial');
  } else {
    score += 1;
  }

  // Verificações adicionais
  if (password.length >= 12) {
    score += 1;
  }

  // Determinar força da senha
  let strength: 'weak' | 'medium' | 'strong' = 'weak';
  if (score >= 4 && errors.length === 0) {
    strength = score >= 5 ? 'strong' : 'medium';
  }

  return {
    isValid: errors.length === 0,
    errors,
    strength
  };
};

export const getPasswordStrengthColor = (strength: 'weak' | 'medium' | 'strong'): string => {
  switch (strength) {
    case 'weak':
      return 'text-red-500';
    case 'medium':
      return 'text-yellow-500';
    case 'strong':
      return 'text-green-500';
    default:
      return 'text-gray-500';
  }
};

export const getPasswordStrengthText = (strength: 'weak' | 'medium' | 'strong'): string => {
  switch (strength) {
    case 'weak':
      return 'Fraca';
    case 'medium':
      return 'Média';
    case 'strong':
      return 'Forte';
    default:
      return '';
  }
};