#!/bin/bash
# cleanup_logs.sh - Elimina archivos .log antiguos.
#
# Uso: ./cleanup_logs.sh <directorio_de_logs>
# Ejemplo: ./cleanup_logs.sh /var/logs

if [ "$#" -ne 1 ]; then
    echo "Uso: $0 <directorio_de_logs>"
    exit 1
fi

LOG_DIR=$1
DAYS=7

echo "Eliminando archivos .log en $LOG_DIR que tengan más de $DAYS días..."
# Busca y elimina archivos .log modificados hace más de 7 días
find "$LOG_DIR" -type f -name "*.log" -mtime +$DAYS -exec rm -f {} \;

echo "Limpieza de logs completada."
