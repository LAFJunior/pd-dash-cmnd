@echo off
echo Iniciando backend do chat...
cd backend\chat-agent
python -m venv venv
call venv\Scripts\activate
pip install -r requirements.txt
python app.py
pause