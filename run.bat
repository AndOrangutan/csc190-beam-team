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
start cmd /c "cd server && yarn install"
if errorlevel 1 (
    echo Error: Yarn install for Server failed.
    exit /b 1
)

:: Starting Server
echo Starting Server:
start cmd /c "cd server && yarn run build && yarn run start"
if errorlevel 1 (
    echo Error: Starting Server failed.
    exit /b 1
)

:: Starting Client
echo Starting Client:
call yarn run start
if errorlevel 1 (
    echo Error: Starting Client failed.
    exit /b 1
)

echo All components are running.
