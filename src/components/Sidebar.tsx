import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  MapPin, 
  Briefcase, 
  Users, 
  Bot, 
  ChevronLeft,
  Store,
  BookOpen,
  FileText,
  LogOut
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { usePermissions } from '@/hooks/usePermissions';

interface MenuItemProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  collapsed: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ to, icon, text, collapsed }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `menu-item ${isActive ? 'active' : ''} ${collapsed ? 'justify-center' : ''}`
      }
    >
      <span className="menu-item-icon">{icon}</span>
      {!collapsed && <span className="menu-item-text">{text}</span>}
    </NavLink>
  );
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const { profile, isAdmin } = usePermissions();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast.success('Logout realizado com sucesso!');
      navigate('/auth');
    } catch (error) {
      console.error('Erro no logout:', error);
      toast.error('Erro ao fazer logout');
    }
  };
  
  return (
    <div className={`bg-sidebar h-screen ${collapsed ? 'w-16' : 'w-64'} transition-all duration-300 flex flex-col`}>
      <div className="p-4 flex items-center justify-between border-b border-sidebar-accent">
        {!collapsed && (
          <h1 className="text-white font-bold text-xl">Processos Digitais</h1>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className={`text-white p-1 rounded hover:bg-sidebar-accent ${collapsed ? 'mx-auto' : ''}`}
        >
          <ChevronLeft size={20} className={`transition-transform ${collapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>
      
      <nav className="flex flex-col gap-1 p-2 flex-1">
        <MenuItem 
          to="/" 
          icon={<LayoutDashboard size={20} />} 
          text="Dashboard" 
          collapsed={collapsed}
        />
        <MenuItem 
          to="/mapa-contexto" 
          icon={<MapPin size={20} />} 
          text="Mapa de Contexto" 
          collapsed={collapsed}
        />
        <MenuItem 
          to="/mapa-lojas" 
          icon={<Store size={20} />} 
          text="Mapa das Lojas" 
          collapsed={collapsed}
        />
        <MenuItem 
          to="/departamentos" 
          icon={<Briefcase size={20} />} 
          text="Departamentos" 
          collapsed={collapsed}
        />
        <MenuItem 
          to="/colaboradores" 
          icon={<Users size={20} />} 
          text="Colaboradores" 
          collapsed={collapsed}
        />
        <MenuItem 
          to="/agente-ia" 
          icon={<Bot size={20} />} 
          text="Agente IA Oscar" 
          collapsed={collapsed}
        />
        
        <div className="mt-4 pt-4 border-t border-sidebar-accent">
          <MenuItem 
            to="/docs-pd" 
            icon={<BookOpen size={20} />} 
            text="Docs - PD" 
            collapsed={collapsed}
          />
          <MenuItem 
            to="/documentacao" 
            icon={<FileText size={20} />} 
            text="Documentação" 
            collapsed={collapsed}
          />
        </div>
      </nav>
      
      {/* Área de informações do usuário e logout */}
      <div className="mt-auto p-4 border-t border-sidebar-accent">
        {profile && (
          <div className="mb-3">
            {!collapsed && (
              <div className="text-white text-sm">
                <p className="font-medium truncate">{profile.full_name}</p>
                <p className="text-sidebar-foreground/70 text-xs truncate">{profile.department}</p>
                {isAdmin && (
                  <span className="text-xs bg-yellow-600 text-white px-2 py-0.5 rounded mt-1 inline-block">
                    Admin
                  </span>
                )}
              </div>
            )}
          </div>
        )}
        
        <button
          onClick={handleLogout}
          className={`w-full flex items-center gap-3 p-3 text-white hover:bg-sidebar-accent rounded-lg transition-colors ${collapsed ? 'justify-center' : ''}`}
        >
          <LogOut size={20} />
          {!collapsed && <span>Sair</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;