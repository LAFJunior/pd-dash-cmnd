import { useMemo, useState } from 'react';
import { Star, Filter } from 'lucide-react';
import { todosOsProcessos } from '@/data/processos';
import CardProcesso from './CardProcesso';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useFavoritos } from '@/hooks/useFavoritos';
import { Button } from '@/components/ui/button';

type FiltroNivel = 'Todos' | 'Estratégico' | 'Tático' | 'Operacional';
type FiltroDepartamento = string;

interface PainelControleProps {
  buscaGlobal: string;
}

export const PainelControle = ({ buscaGlobal }: PainelControleProps) => {
  const [filtroNivel, setFiltroNivel] = useState<FiltroNivel>('Todos');
  const [filtroDepartamento, setFiltroDepartamento] = useState<FiltroDepartamento>('Todos');
  const { favoritos, toggleFavorito, isFavorito } = useFavoritos();

  const departamentos = [
    { nome: 'Todos', icone: Filter, cor: 'text-primary' },
    { nome: 'Controladoria', icone: Filter, cor: 'text-blue-500' },
    { nome: 'E-commerce', icone: Filter, cor: 'text-purple-500' },
    { nome: 'Financeiro', icone: Filter, cor: 'text-green-500' },
    { nome: 'Defeito', icone: Filter, cor: 'text-orange-500' },
    { nome: 'Fiscal', icone: Filter, cor: 'text-red-500' },
    { nome: 'Compras', icone: Filter, cor: 'text-yellow-500' },
    { nome: 'Auditoria', icone: Filter, cor: 'text-indigo-500' },
    { nome: 'Contábil', icone: Filter, cor: 'text-pink-500' },
    { nome: 'Departamento Pessoal', icone: Filter, cor: 'text-teal-500' },
    { nome: 'Recursos Humanos', icone: Filter, cor: 'text-cyan-500' },
    { nome: 'São José dos Campos', icone: Filter, cor: 'text-lime-500' }
  ];

  const obterDepartamento = (processoId: string): string => {
    if (processoId.startsWith('ctrl')) return 'Controladoria';
    if (processoId.startsWith('ec')) return 'E-commerce';
    if (processoId.startsWith('fin')) return 'Financeiro';
    if (processoId.startsWith('def')) return 'Defeito';
    if (processoId.startsWith('fisc')) return 'Fiscal';
    if (processoId.startsWith('comp')) return 'Compras';
    if (processoId.startsWith('aud')) return 'Auditoria';
    if (processoId.startsWith('cont')) return 'Contábil';
    if (processoId.startsWith('dp')) return 'Departamento Pessoal';
    if (processoId.startsWith('rh')) return 'Recursos Humanos';
    if (processoId.startsWith('sjc')) return 'São José dos Campos';
    return 'Outros';
  };

  const processosFiltrados = useMemo(() => {
    return todosOsProcessos.filter(processo => {
      const matchNivel = filtroNivel === 'Todos' || processo.nivel === filtroNivel;
      const matchDepartamento = filtroDepartamento === 'Todos' || obterDepartamento(processo.id) === filtroDepartamento;
      const matchBusca = !buscaGlobal || 
        processo.nome.toLowerCase().includes(buscaGlobal.toLowerCase()) ||
        processo.descricao.toLowerCase().includes(buscaGlobal.toLowerCase());
      
      return matchNivel && matchDepartamento && matchBusca;
    });
  }, [filtroNivel, filtroDepartamento, buscaGlobal]);

  const todosOsSubprocessos: any[] = [];
  const todasAsTarefas: any[] = [];

  processosFiltrados.forEach(processo => {
    processo.subprocessos.forEach(subprocesso => {
      todosOsSubprocessos.push({
        nome: subprocesso.nome,
        processo: processo.nome,
        departamento: obterDepartamento(processo.id)
      });
      
      subprocesso.tarefas.forEach(tarefa => {
        todasAsTarefas.push({
          nome: tarefa.nome,
          subprocesso: subprocesso.nome,
          processo: processo.nome,
          departamento: obterDepartamento(processo.id)
        });
      });
    });
  });

  const contadorFiltrado = {
    total: processosFiltrados.length,
    estrategicos: processosFiltrados.filter(p => p.nivel === 'Estratégico').length,
    taticos: processosFiltrados.filter(p => p.nivel === 'Tático').length,
    operacionais: processosFiltrados.filter(p => p.nivel === 'Operacional').length
  };

  const processosFavoritos = processosFiltrados.filter(p => isFavorito(p.id));

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Favoritos */}
      {processosFavoritos.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
              Meus Favoritos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {processosFavoritos.map(processo => (
                <div key={processo.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="font-medium">{processo.nome}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleFavorito({ id: processo.id, tipo: 'processo', nome: processo.nome })}
                  >
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Filtros de Nível */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div onClick={() => setFiltroNivel('Todos')} className="cursor-pointer">
          <CardProcesso titulo="Todos os Processos" quantidade={contadorFiltrado.total} className={filtroNivel === 'Todos' ? 'ring-2 ring-primary' : ''} />
        </div>
        <div onClick={() => setFiltroNivel('Estratégico')} className="cursor-pointer">
          <CardProcesso titulo="Estratégicos" quantidade={contadorFiltrado.estrategicos} className={filtroNivel === 'Estratégico' ? 'ring-2 ring-primary' : ''} />
        </div>
        <div onClick={() => setFiltroNivel('Tático')} className="cursor-pointer">
          <CardProcesso titulo="Táticos" quantidade={contadorFiltrado.taticos} className={filtroNivel === 'Tático' ? 'ring-2 ring-primary' : ''} />
        </div>
        <div onClick={() => setFiltroNivel('Operacional')} className="cursor-pointer">
          <CardProcesso titulo="Operacionais" quantidade={contadorFiltrado.operacionais} className={filtroNivel === 'Operacional' ? 'ring-2 ring-primary' : ''} />
        </div>
      </div>

      {/* Filtros de Departamento */}
      <Card>
        <CardHeader>
          <CardTitle>Filtrar por Departamento</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {departamentos.map(dept => (
              <Button
                key={dept.nome}
                variant={filtroDepartamento === dept.nome ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFiltroDepartamento(dept.nome)}
                className="flex items-center gap-2"
              >
                <dept.icone className="h-4 w-4" />
                {dept.nome}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tabelas */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Subprocessos ({todosOsSubprocessos.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-h-[400px] overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Processo</TableHead>
                      <TableHead>Departamento</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {todosOsSubprocessos.map((sub, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="font-medium">{sub.nome}</TableCell>
                        <TableCell>{sub.processo}</TableCell>
                        <TableCell>{sub.departamento}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tarefas ({todasAsTarefas.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-h-[400px] overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Subprocesso</TableHead>
                      <TableHead>Processo</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {todasAsTarefas.map((tarefa, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="font-medium">{tarefa.nome}</TableCell>
                        <TableCell>{tarefa.subprocesso}</TableCell>
                        <TableCell>{tarefa.processo}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Processos ({processosFiltrados.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-h-[850px] overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Nível</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {processosFiltrados.map(processo => (
                    <TableRow key={processo.id}>
                      <TableCell className="font-medium">{processo.nome}</TableCell>
                      <TableCell>{processo.nivel}</TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFavorito({ id: processo.id, tipo: 'processo', nome: processo.nome })}
                        >
                          <Star className={`h-4 w-4 ${isFavorito(processo.id) ? 'fill-yellow-500 text-yellow-500' : ''}`} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
