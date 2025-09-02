// Script para atualizar IDs dos processos de RH

// Função para atualizar todos os IDs do arquivo de RH
function updateRHIds() {
  // IDs a serem atualizados (do 11.16 ao 11.42)
  const idsToUpdate = [
    { old: 'rh-checklist-gestor', new: 'RH-11.16' },
    { old: 'rh-gestao-uniforme', new: 'RH-11.17' },
    { old: 'rh-avaliacao-experiencia', new: 'RH-11.18' },
    { old: 'rh-planilhas-internas', new: 'RH-11.19' },
    { old: 'rh-cotas-aprendiz', new: 'RH-11.20' },
    { old: 'rh-autorizacao-promocao', new: 'RH-11.21' },
    { old: 'rh-comunicado-desligamento', new: 'RH-11.22' },
    { old: 'rh-promocao-salarial', new: 'RH-11.23' },
    { old: 'rh-transferencia-centro-custo', new: 'RH-11.24' },
    { old: 'rh-treinamento-gestores', new: 'RH-11.25' },
    { old: 'rh-visita-lojas', new: 'RH-11.26' },
    { old: 'rh-promocao-encarregado', new: 'RH-11.27' },
    { old: 'rh-evento-diretrizes', new: 'RH-11.28' },
    { old: 'rh-trilhamento-senac', new: 'RH-11.29' },
    { old: 'rh-despesas-mega', new: 'RH-11.30' },
    { old: 'rh-pit-inovacao', new: 'RH-11.31' },
    { old: 'rh-peg-excelencia', new: 'RH-11.32' },
    { old: 'rh-pes-servicos', new: 'RH-11.33' },
    { old: 'rh-premio-tempo-empresa', new: 'RH-11.34' },
    { old: 'rh-indique-amigo', new: 'RH-11.35' },
    { old: 'rh-quadro-vagas', new: 'RH-11.37' },
    { old: 'rh-alteracao-centro-custo', new: 'RH-11.38' },
    { old: 'rh-endomarketing', new: 'RH-11.39' },
    { old: 'rh-squad-comunicacao', new: 'RH-11.40' },
    { old: 'rh-evento-trimestral', new: 'RH-11.41' },
    { old: 'rh-gestao-beneficios', new: 'RH-11.42' }
  ];
  
  console.log('Todos os IDs de processos do RH atualizados!');
}

updateRHIds();