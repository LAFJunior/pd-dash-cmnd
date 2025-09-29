import React from 'react';
import { Building2, FileText, DollarSign, Scale, Users, ShoppingCart, Truck, AlertTriangle, Store, CreditCard, Megaphone, Computer, HeadphonesIcon, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface DepartamentosDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  filtroDepartamento: string;
  onSelectDepartamento: (departamento: string) => void;
}

interface Departamento {
  nome: string;
  icone: React.ElementType;
  cor: string;
}

interface CategoriaDepartamentos {
  titulo: string;
  departamentos: Departamento[];
}

const categorias: CategoriaDepartamentos[] = [
  {
    titulo: '🏢 Back Office',
    departamentos: [
      { nome: 'Controladoria', icone: FileText, cor: 'bg-blue-500' },
      { nome: 'Financeiro', icone: DollarSign, cor: 'bg-green-500' },
      { nome: 'Fiscal', icone: Scale, cor: 'bg-purple-500' },
      { nome: 'Contábil', icone: FileText, cor: 'bg-emerald-500' },
      { nome: 'Departamento Pessoal', icone: Users, cor: 'bg-teal-500' },
      { nome: 'Recursos Humanos', icone: Users, cor: 'bg-pink-500' },
    ]
  },
  {
    titulo: '🛍️ Varejo',
    departamentos: [
      { nome: 'E-commerce', icone: ShoppingCart, cor: 'bg-orange-500' },
      { nome: 'Compras', icone: Truck, cor: 'bg-cyan-500' },
      { nome: 'Auditoria', icone: FileText, cor: 'bg-gray-500' },
    ]
  },
  {
    titulo: '🤝 Parceiros',
    departamentos: [
      { nome: 'Defeito', icone: AlertTriangle, cor: 'bg-red-500' },
      { nome: 'São José Campos', icone: Building2, cor: 'bg-indigo-500' },
      { nome: 'Festcard', icone: CreditCard, cor: 'bg-yellow-500' },
      { nome: 'Marketing', icone: Megaphone, cor: 'bg-rose-500' },
      { nome: 'T.I', icone: Computer, cor: 'bg-violet-500' },
    ]
  }
];

export function DepartamentosDrawer({
  open,
  onOpenChange,
  filtroDepartamento,
  onSelectDepartamento
}: DepartamentosDrawerProps) {
  
  const handleSelectDepartamento = (nome: string) => {
    onSelectDepartamento(nome);
    onOpenChange(false);
  };

  const handleLimparFiltros = () => {
    onSelectDepartamento('todos');
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[400px] sm:w-[540px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            Explorar Departamentos
          </SheetTitle>
          <SheetDescription>
            Selecione um departamento para filtrar os processos
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {categorias.map((categoria) => (
            <div key={categoria.titulo} className="space-y-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                {categoria.titulo}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {categoria.departamentos.map((dept) => {
                  const IconeComponent = dept.icone;
                  const isActive = filtroDepartamento === dept.nome;
                  
                  return (
                    <button
                      key={dept.nome}
                      onClick={() => handleSelectDepartamento(dept.nome)}
                      className={`
                        p-4 rounded-lg border-2 transition-all duration-200
                        hover:shadow-md hover:scale-[1.02] active:scale-[0.98]
                        ${isActive 
                          ? 'border-primary bg-primary/5 shadow-lg ring-2 ring-primary/20' 
                          : 'border-border hover:border-primary/50'
                        }
                      `}
                    >
                      <div className="flex flex-col items-center text-center gap-2">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          isActive ? 'bg-primary' : dept.cor
                        }`}>
                          <IconeComponent className="w-6 h-6 text-white" />
                        </div>
                        <span className={`text-xs font-medium ${
                          isActive ? 'text-primary' : 'text-foreground'
                        }`}>
                          {dept.nome}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
              <Separator className="mt-4" />
            </div>
          ))}
        </div>

        <SheetFooter className="mt-6">
          <Button
            variant="outline"
            onClick={handleLimparFiltros}
            className="w-full"
          >
            <X className="w-4 h-4 mr-2" />
            Limpar Filtros
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
