@echo off 
cd C:\Users\diyar\Downloads\ff\ff\grandrp_ads 
:loop 
python app.py 
timeout /t 5 
goto loop 
