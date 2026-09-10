@echo off
title Push Portfolio to GitHub
cd /d "%~dp0"
echo ========================================================
echo   Pushing Portfolio to GitHub:
echo   https://github.com/Rithick8484/Portfolio.git
echo ========================================================
echo.
"C:\Program Files\Git\cmd\git.exe" push -u origin main
echo.
if %ERRORLEVEL% equ 0 (
    echo ========================================================
    echo   [SUCCESS] Successfully pushed all files to GitHub!
    echo ========================================================
) else (
    echo ========================================================
    echo   [INFO] If prompted, sign in via your browser above.
    echo ========================================================
)
echo.
pause
