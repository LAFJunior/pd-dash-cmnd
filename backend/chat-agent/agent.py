import os
from dotenv import load_dotenv
from pydantic_ai import Agent
from pydantic_ai.models.openai import OpenAIModel

load_dotenv()
os.environ['OPENAI_API_KEY'] = os.getenv("OPENAI_API_KEY")

def create_department_agent(department: str, knowledge_data: dict):
    """Cria um agente para um departamento específico"""
    processes = knowledge_data.get('processes', [])
    info = knowledge_data.get('info', '')
    
    processes_text = "\n".join([f"- {p.get('nome', '')}: {p.get('descricao', '')}" for p in processes])
    
    return Agent(
        model=OpenAIModel('gpt-4o-mini'),
        system_prompt=f"""
        Você é o assistente especializado do departamento {department} do Grupo Oscar.
        
        PROCESSOS DO DEPARTAMENTO:
        {processes_text}
        
        INFORMAÇÕES ADICIONAIS:
        {info}
        
        REGRAS:
        1. Responda APENAS sobre processos e atividades do {department}
        2. Use linguagem clara e profissional
        3. Se perguntarem sobre outro departamento, direcione para o agente correto
        4. Sempre mencione processos específicos quando relevante
        5. Seja conciso mas informativo
        """
    )

