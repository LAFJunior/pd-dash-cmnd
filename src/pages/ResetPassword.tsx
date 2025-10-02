import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { validatePassword, getPasswordStrengthColor, getPasswordStrengthText } from '@/utils/passwordValidation';

const ResetPassword = () => {
  const { updatePassword } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(validatePassword(''));

  useEffect(() => {
    setPasswordValidation(validatePassword(newPassword));
  }, [newPassword]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!passwordValidation.isValid) {
      return;
    }

    if (newPassword !== confirmPassword) {
      return;
    }

    setLoading(true);
    const { error } = await updatePassword(newPassword);
    setLoading(false);

    if (!error) {
      navigate('/');
    }
  };

  const passwordsMatch = newPassword === confirmPassword;
  const canSubmit = passwordValidation.isValid && passwordsMatch && newPassword.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
          
          {/* Logo */}
          <div className="flex justify-center mb-8 h-32 overflow-hidden">
            <img 
              src="/lovable-uploads/logo_pd.png" 
              alt="Logo" 
              className="w-44 h-44 object-contain"
            />
          </div>

          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Redefinir Senha</h1>
            <p className="text-gray-600">Digite sua nova senha</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 font-medium text-gray-700">Nova Senha</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Digite sua nova senha"
                  className="w-full p-3 pr-12 border-2 border-gray-200 rounded-xl text-base bg-white text-black transition-all focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              
              {/* Indicador de força da senha */}
              {newPassword && (
                <div className="mt-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-gray-600">Força:</span>
                    <span className={`text-sm font-medium ${getPasswordStrengthColor(passwordValidation.strength)}`}>
                      {getPasswordStrengthText(passwordValidation.strength)}
                    </span>
                  </div>
                  
                  {/* Barra de progresso */}
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all ${
                        passwordValidation.strength === 'weak' ? 'bg-red-500 w-1/3' :
                        passwordValidation.strength === 'medium' ? 'bg-yellow-500 w-2/3' :
                        'bg-green-500 w-full'
                      }`}
                    />
                  </div>
                </div>
              )}

              {/* Erros de validação */}
              {passwordValidation.errors.length > 0 && (
                <div className="mt-2 space-y-1">
                  {passwordValidation.errors.map((error, index) => (
                    <p key={index} className="text-sm text-red-600">• {error}</p>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Confirmar Nova Senha</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Digite a senha novamente"
                className="w-full p-3 border-2 border-gray-200 rounded-xl text-base bg-white text-black transition-all focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20"
                required
              />
              
              {/* Validação de confirmação */}
              {confirmPassword && !passwordsMatch && (
                <p className="mt-1 text-sm text-red-600">As senhas não coincidem</p>
              )}
              {confirmPassword && passwordsMatch && (
                <p className="mt-1 text-sm text-green-600">✓ Senhas coincidem</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || !canSubmit}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 disabled:opacity-50 text-white rounded-xl font-semibold text-base uppercase tracking-[0.5px] transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60"
            >
              {loading ? 'ATUALIZANDO...' : 'ATUALIZAR SENHA'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;