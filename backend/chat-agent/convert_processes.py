import json
import os

def create_knowledge_base():
    """Cria base de conhecimento a partir dos dados do pd-dash-cmnd"""
    
    # Estrutura base para cada departamento
    departments_data = {
        "Controladoria": {
            "info": "Departamento responsável por controles internos, auditoria de franquias e gestão de contratos.",
            "processes": [
                {"nome": "Conciliação Bancária", "descricao": "Processo de conciliação de extratos bancários"},
                {"nome": "Auditoria de Franquias", "descricao": "Auditoria e controle das operações de franquias"},
                {"nome": "Gestão de Contratos", "descricao": "Controle e gestão de contratos empresariais"},
                {"nome": "Apoio às Lojas", "descricao": "Suporte operacional e financeiro às lojas"}
            ]
        },
        "Ecommerce": {
            "info": "Departamento responsável por vendas online, marketplace e operações digitais.",
            "processes": [
                {"nome": "Cadastro de Produtos", "descricao": "Cadastro e manutenção de produtos no e-commerce"},
                {"nome": "Comercial 1P", "descricao": "Gestão comercial de produtos próprios"},
                {"nome": "Logística E-commerce", "descricao": "Operações logísticas para vendas online"},
                {"nome": "Visual Merchandising", "descricao": "Apresentação visual dos produtos online"}
            ]
        },
        "Financeiro": {
            "info": "Departamento responsável por gestão financeira, fluxo de caixa e análises econômicas.",
            "processes": [
                {"nome": "Fluxo de Caixa", "descricao": "Controle e projeção do fluxo de caixa"},
                {"nome": "Análise Financeira", "descricao": "Análises e relatórios financeiros"},
                {"nome": "Contas a Pagar", "descricao": "Gestão de pagamentos e fornecedores"},
                {"nome": "Contas a Receber", "descricao": "Gestão de recebimentos e clientes"}
            ]
        },
        "Contabil": {
            "info": "Departamento responsável por escrituração contábil, apurações fiscais e obrigações acessórias.",
            "processes": [
                {"nome": "Fechamento Mensal", "descricao": "Processo de fechamento contábil mensal"},
                {"nome": "Apuração PIS/COFINS", "descricao": "Cálculo e apuração de PIS e COFINS"},
                {"nome": "Geração ECD", "descricao": "Geração da Escrituração Contábil Digital"},
                {"nome": "Conciliação de Receitas", "descricao": "Conciliação de receitas e despesas"}
            ]
        },
        "Departamento-Pessoal": {
            "info": "Departamento responsável por folha de pagamento, admissões, demissões e benefícios.",
            "processes": [
                {"nome": "Folha de Pagamento", "descricao": "Processamento da folha de pagamento mensal"},
                {"nome": "Admissão de Colaboradores", "descricao": "Processo de contratação de novos funcionários"},
                {"nome": "Gestão de Benefícios", "descricao": "Administração de benefícios dos colaboradores"},
                {"nome": "Planejamento de Férias", "descricao": "Controle e planejamento de férias"}
            ]
        },
        "Auditoria": {
            "info": "Departamento responsável por auditoria interna, controles e compliance.",
            "processes": [
                {"nome": "Auditoria Interna", "descricao": "Processos de auditoria interna"},
                {"nome": "Controles Internos", "descricao": "Implementação e monitoramento de controles"},
                {"nome": "Compliance", "descricao": "Verificação de conformidade regulatória"}
            ]
        }
    }
    
    # Cria diretório knowledge se não existir
    os.makedirs("knowledge", exist_ok=True)
    
    # Salva cada departamento em arquivo JSON
    for dept, data in departments_data.items():
        with open(f"knowledge/{dept.lower()}.json", "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
    
    print("Base de conhecimento criada com sucesso!")

if __name__ == "__main__":
    create_knowledge_base()