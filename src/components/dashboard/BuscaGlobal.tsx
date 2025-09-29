import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface BuscaGlobalProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const BuscaGlobal = ({ value, onChange, placeholder = "Buscar processos, departamentos..." }: BuscaGlobalProps) => {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10"
      />
    </div>
  );
};
