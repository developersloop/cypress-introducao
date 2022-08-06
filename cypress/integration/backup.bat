@echo off
set usuario="root"
set senha="dualcore"
set banco=%1
set backup_dir="C:\Users\vitor.vicente\Desktop\Pos-Banco-de-Dados\Backups\"
set mysqldump="C:\Program Files\MySQL\MySQL Server 8.0\bin\mysqldump.exe"
echo "Iniciando backup do banco de dados: %banco%"
For /f "tokens=1-4 delims=/ " %%a in ('date /t') do set(dt=%%c%%b%%a) 
For /f "tokens=1-4 delims=: " %%a in ('echo %time%') do set(tm=%%a%%b%%c)
set backup_nome="%banco%_%dt%_%tm%.sql"
%mysqldump% -u%usuario% -p%senha% %banco% > %backup_dir%%backup_nome% 
echo  Pronto!