import { ProcessoDetalhado } from '@/types/processo';
import { processosControladoriaDetalhados } from './controladoria';
import { processosEcommerce } from './ecommerce';
import { processosFinanceiro } from './financeiro';
import { processosDefeito } from './defeito';
import { processosSaoJoseCampos } from './sao-jose-campos';

// Função para extrair todos os processos dos pilares do e-commerce
const extrairProcessosEcommerce = (): ProcessoDetalhado[] => {
  const processos: ProcessoDetalhado[] = [];
  
  Object.values(processosEcommerce).forEach(processosPilar => {
    if (Array.isArray(processosPilar)) {
      processos.push(...processosPilar);
    }
  });
  
  return processos;
};

// Agregação de todos os processos de todos os departamentos
export const todosOsProcessos: ProcessoDetalhado[] = [
  ...processosControladoriaDetalhados,
  ...extrairProcessosEcommerce(),
  ...processosFinanceiro,
  ...processosDefeito,
  ...processosSaoJoseCampos
];

// Função para contar processos por nível
export const contarProcessosPorNivel = () => {
  const contadores = {
    total: todosOsProcessos.length,
    estrategicos: 0,
    taticos: 0,
    operacionais: 0
  };

  todosOsProcessos.forEach(processo => {
    switch (processo.nivel) {
      case 'Estratégico':
        contadores.estrategicos++;
        break;
      case 'Tático':
        contadores.taticos++;
        break;
      case 'Operacional':
        contadores.operacionais++;
        break;
    }
  });

  return contadores;
};

// Função para contar processos por departamento
export const contarProcessosPorDepartamento = () => {
  const total = todosOsProcessos.length;
  const contadores = {
    controladoria: processosControladoriaDetalhados.length,
    ecommerce: extrairProcessosEcommerce().length,
    financeiro: processosFinanceiro.length,
    defeito: processosDefeito.length,
    saoJoseCampos: processosSaoJoseCampos.length
  };

  // Calcular porcentagens
  const dados = [
    {
      nome: 'Controladoria',
      quantidade: contadores.controladoria,
      porcentagem: total > 0 ? (contadores.controladoria / total) * 100 : 0
    },
    {
      nome: 'E-commerce',
      quantidade: contadores.ecommerce,
      porcentagem: total > 0 ? (contadores.ecommerce / total) * 100 : 0
    },
    {
      nome: 'Financeiro',
      quantidade: contadores.financeiro,
      porcentagem: total > 0 ? (contadores.financeiro / total) * 100 : 0
    },
    {
      nome: 'Defeito',
      quantidade: contadores.defeito,
      porcentagem: total > 0 ? (contadores.defeito / total) * 100 : 0
    },
    {
      nome: 'São José dos Campos',
      quantidade: contadores.saoJoseCampos,
      porcentagem: total > 0 ? (contadores.saoJoseCampos / total) * 100 : 0
    }
  ];

  return dados;
};