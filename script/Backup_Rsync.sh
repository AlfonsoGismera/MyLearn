#!/bin/bash
# backup.sh - Realiza un backup de un directorio usando rsync.
#
# Uso: ./backup.sh <directorio_origen> <directorio_destino>
# Ejemplo: ./backup.sh /home/usuario/proyecto /home/usuario/backups

# Verifica que se hayan pasado dos argumentos
if [ "$#" -ne 2 ]; then
    echo "Uso: $0 <directorio_origen> <directorio_destino>"
    exit 1
fi

ORIGEN=$1
DESTINO=$2
# Crea un timestamp para identificar el backup
TIMESTAMP=$(date +"%Y%m%d%H%M%S")
DESTINO_FINAL="$DESTINO/backup-$TIMESTAMP"

echo "Realizando backup de $ORIGEN a $DESTINO_FINAL..."
# Copia el contenido usando rsync con opción de eliminación de archivos que ya no existen en el origen
rsync -av --delete "$ORIGEN" "$DESTINO_FINAL"

echo "Backup completado."
