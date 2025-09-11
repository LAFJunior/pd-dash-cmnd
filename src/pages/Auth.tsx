import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const CARGOS = [
  { value: 'diretoria', label: 'Diretor' },
  { value: 'gestao', label: 'Gestor / Gerente / Header' },
  { value: 'coordenacao', label: 'Coordenador / Supervisor / Líder' },
  { value: 'analista', label: 'Analista / Técnico / Especialista' },
  { value: 'assistente', label: 'Assistente / Auxiliar / Operacional' }
];

const DEPARTMENTS = [
  'Auditoria',
  'Compras', 
  'Contábil',
  'Controladoria',
  'Departamento Pessoal (DP)',
  'Defeito',
  'E-commerce',
  'Festcard',
  'Financeiro Varejo',
  'Fiscal',
  'Loja',
  'Marketing',
  'Recursos Humanos (RH)',
  'CD/Operações (S. J. dos Campos)',
  'Suprimentos',
  'SAC',
  'T.I Desenvolvimento',
  'T.I Operações',
  'T.I Projetos e Inovações'
];

const Auth: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('login');
  const navigate = useNavigate();
  const location = useLocation();
  
  // Página de origem para redirecionamento após login
  const from = location.state?.from?.pathname || '/';

  // Estados para Login
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Estados para Cadastro
  const [signupFullName, setSignupFullName] = useState('');
  const [signupCargo, setSignupCargo] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [signupDepartment, setSignupDepartment] = useState('');

  useEffect(() => {
    // Verificar se usuário já está logado
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        navigate(from, { replace: true });
      }
    };
    checkUser();
  }, [navigate, from]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: loginEmail,
        password: loginPassword
      });

      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          setError('Email ou senha incorretos.');
        } else if (error.message.includes('Email not confirmed')) {
          setError('Email não confirmado. Verifique sua caixa de entrada.');
        } else {
          setError(error.message);
        }
      } else {
        toast.success('Login realizado com sucesso!');
        navigate(from, { replace: true });
      }
    } catch (err) {
      console.error('Erro no login:', err);
      setError('Erro interno. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validações
    if (!signupDepartment) {
      setError('Por favor, selecione um departamento.');
      setLoading(false);
      return;
    }

    if (!signupCargo) {
      setError('Por favor, selecione um cargo.');
      setLoading(false);
      return;
    }

    if (signupPassword !== signupConfirmPassword) {
      setError('As senhas não coincidem.');
      setLoading(false);
      return;
    }

    try {
      const redirectUrl = `${window.location.origin}/`;
      
      const { error } = await supabase.auth.signUp({
        email: signupEmail,
        password: signupPassword,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            full_name: signupFullName,
            department: signupDepartment,
            cargo: signupCargo
          }
        }
      });

      if (error) {
        if (error.message.includes('User already registered')) {
          setError('Este email já está cadastrado. Use a aba Login.');
        } else if (error.message.includes('Password should be at least')) {
          setError('A senha deve ter pelo menos 6 caracteres.');
        } else if (error.message.includes('Unable to validate email address')) {
          setError('Email inválido. Verifique o formato.');
        } else {
          setError(error.message);
        }
      } else {
        toast.success('Cadastro realizado! Verifique seu email para confirmar a conta.');
        // Limpar formulário
        setSignupFullName('');
        setSignupCargo('');
        setSignupEmail('');
        setSignupPassword('');
        setSignupConfirmPassword('');
        setSignupDepartment('');
      }
    } catch (err) {
      console.error('Erro no cadastro:', err);
      setError('Erro interno. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-[450px]">
        {/* Logo */}
        <div className="text-left mb-6">
          <h1 className="text-[2.4rem] font-normal tracking-[3px] text-black uppercase leading-tight">
            <span className="block text-[1.2rem] font-light tracking-[1px]">GRUPO</span>
            <span>OSCAR</span>
          </h1>
        </div>

        {/* Card */}
        <div className="bg-[#f8f9fa] rounded-xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-black">Processos Digitais</h2>
            <p className="text-gray-600 text-[0.95rem]">Entre com o e-mail corporativo</p>
          </div>

          {/* Tabs */}
          <div className="flex mb-6 rounded-lg overflow-hidden bg-[#e9ecef]">
            <button
              className={`flex-1 py-3 px-5 text-center font-medium text-base transition-all ${
                activeTab === 'login' 
                  ? 'bg-[#c82333] text-white' 
                  : 'bg-[#e9ecef] text-gray-600 hover:bg-[#dee2e6]'
              }`}
              onClick={() => setActiveTab('login')}
            >
              Entrar
            </button>
            <button
              className={`flex-1 py-3 px-5 text-center font-medium text-base transition-all ${
                activeTab === 'register' 
                  ? 'bg-[#c82333] text-white' 
                  : 'bg-[#e9ecef] text-gray-600 hover:bg-[#dee2e6]'
              }`}
              onClick={() => setActiveTab('register')}
            >
              Cadastre-se
            </button>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {/* Login Form */}
          {activeTab === 'login' && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block mb-2 font-medium text-black">Email</label>
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="Digite seu e-mail"
                  className="w-full p-[12px_14px] border-2 border-[#e9ecef] rounded-lg text-base bg-white text-black transition-colors focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-black">Senha</label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  className="w-full p-[12px_14px] border-2 border-[#e9ecef] rounded-lg text-base bg-white text-black transition-colors focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-[12px] bg-[#dc3545] hover:bg-[#c82333] disabled:opacity-50 text-white rounded-lg font-semibold text-base uppercase tracking-[0.5px] transition-all hover:-translate-y-0.5"
              >
                {loading ? 'ENTRANDO...' : 'ENTRAR'}
              </button>
            </form>
          )}

          {/* Register Form */}
          {activeTab === 'register' && (
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block mb-2 font-medium text-black">Nome Completo</label>
                <input
                  type="text"
                  value={signupFullName}
                  onChange={(e) => setSignupFullName(e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full p-[12px_14px] border-2 border-[#e9ecef] rounded-lg text-base bg-white text-black transition-colors focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-black">Cargo</label>
                <select
                  value={signupCargo}
                  onChange={(e) => setSignupCargo(e.target.value)}
                  className="w-full p-[12px_14px] border-2 border-[#e9ecef] rounded-lg text-base bg-white text-black transition-colors focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="">Selecione seu cargo</option>
                  {CARGOS.map(cargo => (
                    <option key={cargo.value} value={cargo.value}>{cargo.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium text-black">Departamento</label>
                <select
                  value={signupDepartment}
                  onChange={(e) => setSignupDepartment(e.target.value)}
                  className="w-full p-[12px_14px] border-2 border-[#e9ecef] rounded-lg text-base bg-white text-black transition-colors focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="">Selecione seu departamento</option>
                  {DEPARTMENTS.map(department => (
                    <option key={department} value={department}>{department}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium text-black">Email</label>
                <input
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  placeholder="Digite seu e-mail"
                  className="w-full p-[12px_14px] border-2 border-[#e9ecef] rounded-lg text-base bg-white text-black transition-colors focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-black">Criar Senha</label>
                <input
                  type="password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  placeholder="Criar senha"
                  className="w-full p-[12px_14px] border-2 border-[#e9ecef] rounded-lg text-base bg-white text-black transition-colors focus:outline-none focus:border-blue-500"
                  required
                  minLength={6}
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-black">Confirmar Senha</label>
                <input
                  type="password"
                  value={signupConfirmPassword}
                  onChange={(e) => setSignupConfirmPassword(e.target.value)}
                  placeholder="Confirme sua senha"
                  className="w-full p-[12px_14px] border-2 border-[#e9ecef] rounded-lg text-base bg-white text-black transition-colors focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-[12px] bg-[#dc3545] hover:bg-[#c82333] disabled:opacity-50 text-white rounded-lg font-semibold text-base uppercase tracking-[0.5px] transition-all hover:-translate-y-0.5"
              >
                {loading ? 'CRIANDO CONTA...' : 'CRIAR CONTA'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;