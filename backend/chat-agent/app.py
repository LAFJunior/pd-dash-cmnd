from agentes import create_department_agent

# Carregar bases de conhecimento simples (txt por enquanto)
def carregar_base(departamento):
    try:
        with open(f"processos/{departamento.lower()}.txt", "r", encoding="utf-8") as f:
            return f.read()
    except FileNotFoundError:
        return "Nenhuma base encontrada."

# Mapa de agentes
agentes = {
    "Festcard": create_department_agent("Festcard", carregar_base("festcard")),
    "Auditoria": create_department_agent("Auditoria", carregar_base("auditoria")),
    "Compras": create_department_agent("Compras", carregar_base("compras")),
}

def responder(usuario, departamento, mensagem):
    if departamento not in agentes:
        return f"Não existe agente para o departamento {departamento}."
    
    agente = agentes[departamento]
    resposta = agente.run(mensagem)
    return resposta.content

# Simulação de mensagens
if __name__ == "__main__":
    usuario = "João"
    departamento = "Festcard"
    mensagem = "Como funciona a aprovação de crédito?"

    print(f"[{usuario} - {departamento}] {mensagem}")
    print("🤖", responder(usuario, departamento, mensagem))
