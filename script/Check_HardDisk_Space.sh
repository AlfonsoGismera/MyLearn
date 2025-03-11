#!/bin/bash
# disk_check.sh - Verifica el espacio en disco y alerta si se supera un umbral.
#
# Uso: ./disk_check.sh [umbral]
# Ejemplo: ./disk_check.sh 90
# Si no se especifica un umbral, se usa 90% por defecto.

THRESHOLD=${1:-90}  # Umbral por defecto: 90%

# Obtiene el porcentaje de uso del disco del sistema (para la raíz)
USAGE=$(df / | tail -1 | awk '{print $5}' | sed 's/%//')

echo "Uso actual del disco: $USAGE%"

if [ "$USAGE" -ge "$THRESHOLD" ]; then
    echo "Alerta: El uso del disco ha superado el $THRESHOLD%."
else
    echo "El uso del disco es normal."
fi
