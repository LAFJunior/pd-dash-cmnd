from flask import Flask, request, jsonify
from flask_cors import CORS
from agent import create_department_agent
import json

app = Flask(__name__)
CORS(app)

# Mapeamento de departamentos para agentes
DEPARTMENT_AGENTS = {}

def load_department_knowledge(department):
    """Carrega base de conhecimento do departamento"""
    try:
        with open(f"knowledge/{department.lower()}.json", "r", encoding="utf-8") as f:
            return json.load(f)
    except FileNotFoundError:
        return {"processes": [], "info": "Base de conhecimento não encontrada."}

def initialize_agents():
    """Inicializa agentes para todos os departamentos"""
    departments = [
        "Controladoria", "Ecommerce", "Financeiro", "Defeito", 
        "Auditoria", "Compras", "Contabil", "Departamento-Pessoal",
        "Recursos-Humanos", "Fiscal", "Sao-Jose-Campos"
    ]
    
    for dept in departments:
        knowledge = load_department_knowledge(dept)
        DEPARTMENT_AGENTS[dept] = create_department_agent(dept, knowledge)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    
    user_department = data.get('department', 'Geral')
    message = data.get('message', '')
    user_info = data.get('user_info', {})
    
    # Seleciona agente baseado no departamento do usuário
    agent = DEPARTMENT_AGENTS.get(user_department)
    
    if not agent:
        return jsonify({
            "response": f"Agente para {user_department} não disponível. Direcionando para suporte geral.",
            "department": "Geral"
        })
    
    # Processa mensagem com contexto do usuário
    context = f"Usuário: {user_info.get('full_name', 'Anônimo')} - Departamento: {user_department}"
    full_message = f"{context}\nMensagem: {message}"
    
    response = agent.run_sync(full_message)
    
    return jsonify({
        "response": response.data,
        "department": user_department,
        "agent_type": "specialized"
    })

@app.route('/departments', methods=['GET'])
def get_departments():
    """Retorna lista de departamentos disponíveis"""
    return jsonify({
        "departments": list(DEPARTMENT_AGENTS.keys())
    })

if __name__ == '__main__':
    initialize_agents()
    app.run(host='0.0.0.0', port=5000, debug=True)