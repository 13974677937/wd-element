@echo off
setlocal enabledelayedexpansion

:: Define the components (subdirectories) as an array
set "components=core docs hooks theme utils"

:: Loop through each component
for %%i in (%components%) do (
    :: Check if the directory exists
    if exist "%%i" (
        echo Initializing pnpm project in "%%i"...
        cd "%%i"
        call pnpm init
        cd ..
    ) else (
        echo Directory "%%i" does not exist.
    )
)

endlocal

pnpm add -Dw typescript@^5.2.2 vite@^5.1.4 vitest@^1.4.0 vue-tsc@^1.8.27 postcss-color-mix@^1.1.0 postcss-each@^1.1.0 postcss-each-variables@^0.3.0 postcss-for@^2.1.1 postcss-nested@^6.0.1 @types/node@^20.11.20 @types/lodash-es@^4.17.12 @vitejs/plugin-vue@^5.0.4 @vitejs/plugin-vue-jsx@^3.1.0 @vue/tsconfig@

pnpm add -w lodash-es@^4.17.21 vue@^3.4.19