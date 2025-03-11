#!/bin/bash
# complex_deploy.sh - Script automatizado para testear, construir y desplegar un proyecto.
#
# Este script realiza las siguientes tareas:
#   1. Parsea opciones de línea de comandos para definir la rama, entorno y versión.
#   2. Hace checkout a la rama especificada y actualiza el repositorio.
#   3. Ejecuta pruebas unitarias y aborta si fallan.
#   4. Construye el proyecto (por ejemplo, con npm).
#   5. Despliega el contenido construido al servidor correspondiente (usando rsync como ejemplo).
#
# Uso:
#   ./complex_deploy.sh -b <branch> -e <environment> -v <version>
# Ejemplo:
#   ./complex_deploy.sh -b main -e production -v 1.0.0

# Configuramos el script para que termine si ocurre algún error
set -e
set -o pipefail

# Valores por defecto
BRANCH="main"
ENVIRONMENT="development"
VERSION="0.0.1"

# Función para mostrar el uso correcto del script
usage() {
    echo "Uso: $0 [-b branch] [-e environment] [-v version]"
    exit 1
}

# Parseo de opciones con getopts
while getopts "b:e:v:" opt; do
    case $opt in
        b) BRANCH="$OPTARG" ;;    # Define la rama a desplegar
        e) ENVIRONMENT="$OPTARG" ;; # Define el entorno (development o production)
        v) VERSION="$OPTARG" ;;     # Define la versión a desplegar
        *) usage ;;                 # Muestra ayuda en caso de opción desconocida
    esac
done

echo "Desplegando la rama '$BRANCH' al entorno '$ENVIRONMENT' con la versión $VERSION..."

# Paso 1: Cambiar a la rama indicada y actualizar el repositorio
echo "Haciendo checkout a la rama $BRANCH..."
git checkout "$BRANCH"
echo "Actualizando la rama $BRANCH..."
git pull origin "$BRANCH"

# Paso 2: Ejecutar pruebas unitarias
echo "Ejecutando pruebas unitarias..."
if ! npm test; then
    echo "Las pruebas fallaron. Abortando despliegue."
    exit 1
fi

# Paso 3: Construir el proyecto
echo "Construyendo el proyecto..."
if ! npm run build; then
    echo "La compilación falló. Abortando despliegue."
    exit 1
fi

# Paso 4: Desplegar según el entorno
echo "Desplegando al entorno $ENVIRONMENT..."
if [ "$ENVIRONMENT" == "production" ]; then
    # Despliegue en producción (por ejemplo, usando rsync para transferir la carpeta 'build')
    rsync -avz build/ user@production-server:/var/www/html/
else
    # Despliegue en desarrollo
    rsync -avz build/ user@dev-server:/var/www/html/
fi

echo "Despliegue exitoso! Versión $VERSION desplegada en el entorno $ENVIRONMENT."
