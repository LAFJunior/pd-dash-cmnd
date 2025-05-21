import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  MapPin, 
  Briefcase, 
  Users, 
  Bot, 
  ChevronLeft
} from 'lucide-react';

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
  
  return (
    <div className={`bg-sidebar h-screen ${collapsed ? 'w-16' : 'w-64'} transition-all duration-300 flex flex-col`}>
      <div className="p-4 flex items-center justify-between border-b border-sidebar-accent">
        {!collapsed ? (
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/5406f15c-6175-4a20-a820-150032c72f42.png" 
              alt="Grupo Oscar" 
              className="h-8 mr-2" 
            />
            <h1 className="text-white font-bold text-xl">Processos Digitais</h1>
          </div>
        ) : (
          <img 
            src="/lovable-uploads/5406f15c-6175-4a20-a820-150032c72f42.png" 
            alt="Grupo Oscar" 
            className="h-8 mx-auto" 
          />
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className={`text-white p-1 rounded hover:bg-sidebar-accent ${collapsed ? 'mx-auto' : ''}`}
        >
          <ChevronLeft size={20} className={`transition-transform ${collapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>
      
      <div className="flex flex-col gap-1 p-2 flex-1">
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
      </div>
      
      <div className={`px-4 py-2 text-xs text-white/50 ${collapsed ? 'text-center' : ''}`}>
        {!collapsed && <p>© 2025 Processos Digitais</p>}
      </div>
    </div>
  );
};

export default Sidebar;
