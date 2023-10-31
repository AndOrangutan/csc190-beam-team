@echo off

:: Init Client
echo Initializing Client:
call yarn install
if errorlevel 1 (
    echo Error: Yarn install for Client failed.
    exit /b 1
)

:: Init Server
echo Initializing Server:
start cmd /c "cd server && yarn install && yarn run build"
if errorlevel 1 (
    echo Error: Yarn install for Server failed.
    exit /b 1
)

echo All components are installed.
