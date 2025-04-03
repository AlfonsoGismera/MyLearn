/*
# **Reto: Encuentra el par más cercano sin loops**
Creador https://github.com/maxdvar/min-diff-pair-challenge/tree/master
## **Descripción**

Dado un array de números enteros `arr` y un número objetivo `target`, tu tarea es encontrar el par de elementos cuya suma sea lo más cercana posible a `target`.

**Pero hay una condición especial**: **NO podés usar loops explícitos (`for`, `while`, etc.).**

## 🎯 **Ejemplo**


const arr = [3, 8, 12, 5, 1];
const target = 15;


**Salida esperada:** `0`

> **Explicación:** El par `[3, 12]` suma exactamente `15`, por lo que `|15 - 15| = 0`.

Otro ejemplo:


const arr = [2, 9, 14, 7];
const target = 20;


**Salida esperada:** `1`

> **Explicación:** El par `[9, 14]` suma `23`, lo más cercano a `20`. La diferencia absoluta es `|23 - 20| = 3`.  
> Sin embargo, `[7, 14]` suma `21`, que es aún más cercano. La diferencia es `|21 - 20| = 1`.  
> La respuesta final es `1`.

## **Reglas del reto**

- Debes encontrar el par más cercano y devolver la diferencia absoluta con el `target`.
- **NO se permite usar loops explícitos (`for`, `while`, etc.).**
- Podés usar **funciones de alto orden** (`map`, `reduce`, `filter`, etc.).
- La solución debe ser lo más eficiente posible.

## **Pistas y consejos**

- Pensá en cómo podrías recorrer un array **sin usar loops tradicionales**.
- Las funciones de **Array.prototype** pueden ser tu mejor aliado.
- Pensá en la **complejidad del algoritmo**: ¿cómo podrías evitar O(n²)?
- ¿Se te ocurre una forma recursiva de abordar el problema? 🤔
*/

const closestPairDiff = (arr, target) => {
  if (!arr || arr.length < 2) {
    return Infinity;
  }

  arr.sort((a, b) => a - b);

  const findClosest = (left, right, minDiff) => {
    if (left >= right) {
      return minDiff;
    }

    const sum = arr[left] + arr[right];
    const diff = Math.abs(sum - target);

    const newMinDiff = Math.min(minDiff, diff);

    if (sum < target) {
      return findClosest(left + 1, right, newMinDiff);
    } else if (sum > target) {
      return findClosest(left, right - 1, newMinDiff);
    } else {
      return 0; // Encontramos una suma exacta
    }
  };

  return findClosest(0, arr.length - 1, Infinity);
};

// Tests
console.log(closestPairDiff([3, 8, 12, 5, 1], 15)); // output: 0
console.log(closestPairDiff([2, 9, 14, 7], 20)); // output: 1
console.log(closestPairDiff([-10, -5, 0, 5, 10], 3)); // output: 2
console.log(closestPairDiff([1, 1, 1, 1, 1], 100)); // output: 98
