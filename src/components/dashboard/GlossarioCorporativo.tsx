import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { glossarioCorporativo } from '@/data/glossario';
import { CategoriaGlossario, TermoGlossario } from '@/types/glossario';
import { Computer, GitBranch, DollarSign, Users, Truck, ShoppingCart, Shield, Search, BookOpen } from 'lucide-react';

const iconMap: Record<string, any> = {
  Computer,
  GitBranch,
  DollarSign,
  Users,
  Truck,
  ShoppingCart,
  Shield
};

export const GlossarioCorporativo = () => {
  const [selectedCategoria, setSelectedCategoria] = useState<CategoriaGlossario | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const getIcon = (iconeName: string) => {
    const Icon = iconMap[iconeName] || BookOpen;
    return Icon;
  };

  const filteredTermos = selectedCategoria
    ? selectedCategoria.termos.filter(termo =>
        termo.termo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        termo.definicao.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <>
      <Card className="bg-card p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-primary" />
          <div>
            <h3 className="text-lg font-semibold">Glossário Corporativo</h3>
            <p className="text-sm text-muted-foreground">Termos e definições importantes do Grupo Oscar</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {glossarioCorporativo.map((categoria) => {
            const Icon = getIcon(categoria.icone);
            return (
              <Card
                key={categoria.id}
                className="p-4 cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02] bg-background border-2 hover:border-primary/50"
                onClick={() => setSelectedCategoria(categoria)}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{categoria.nome}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {categoria.descricao}
                    </p>
                    <p className="text-xs text-primary font-medium mt-2">
                      {categoria.termos.length} termos
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Card>

      <Dialog open={!!selectedCategoria} onOpenChange={() => setSelectedCategoria(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {selectedCategoria && (
                <>
                  {(() => {
                    const Icon = getIcon(selectedCategoria.icone);
                    return <Icon className="w-5 h-5 text-primary" />;
                  })()}
                  {selectedCategoria.nome}
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          
          {selectedCategoria && (
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar termo..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="space-y-3">
                {filteredTermos.map((termo) => (
                  <Card key={termo.termo} className="p-4">
                    <h4 className="font-semibold text-primary mb-2">{termo.termo}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{termo.definicao}</p>
                    {termo.relacionados && termo.relacionados.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs font-medium text-muted-foreground">Relacionados:</span>
                        {termo.relacionados.map((rel) => (
                          <span
                            key={rel}
                            className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary"
                          >
                            {rel}
                          </span>
                        ))}
                      </div>
                    )}
                  </Card>
                ))}
                {filteredTermos.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    Nenhum termo encontrado
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};