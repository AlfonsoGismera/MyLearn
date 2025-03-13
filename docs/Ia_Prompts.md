# Ejemplos Técnicos de Prompts Efectivos

Esta sección presenta ejemplos técnicos para diseñar prompts que aborden problemas específicos en programación, análisis de algoritmos y generación de código estructurado.

---

## 1. Generación y Refactorización de Código

### 1.1. Refactorizar Código Python

**Prompt:**

```markdown
Refactoriza el siguiente código Python para mejorar su legibilidad y eficiencia. Agrega comentarios explicativos a cada función.
```

```python
def compute_factorial(n):
    if n == 0:
        return 1
    else:
        fact = 1
        for i in range(1, n+1):
            fact *= i
        return fact

print(compute_factorial(5))
```

**Salida esperada:**

```python
# Función para calcular el factorial de un número
def compute_factorial(n):
    # Caso base: el factorial de 0 es 1
    if n == 0:
        return 1
    # Inicializa el factorial en 1
    fact = 1
    # Itera desde 1 hasta n para calcular el factorial
    for i in range(1, n+1):
        fact *= i
    return fact

# Prueba de la función
print(compute_factorial(5))  # Salida: 120
```

---

### 1.2. Generación de Código SQL

**Prompt:**

```markdown
Genera una consulta SQL que seleccione los nombres y correos electrónicos de la tabla "usuarios", filtrando aquellos con edad mayor a 18 y que vivan en "Madrid". Ordena los resultados alfabéticamente por el nombre.
```

**Salida esperada:**

```sql
SELECT nombre, correo
FROM usuarios
WHERE edad > 18
  AND ciudad = 'Madrid'
ORDER BY nombre ASC;
```

---

## 2. Análisis y Explicación de Código

### 2.1. Identificación de Errores en Código Java

**Prompt:**

```markdown
Revisa el siguiente fragmento de código Java y lista los posibles errores o mejoras.
```

```java
public class Calculator {
    public static int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        int result = add(5);
        System.out.println("Resultado: " + result);
    }
}
```

**Salida esperada:**

```text
1. El método 'add' requiere dos argumentos, pero se está llamando solo con uno.
2. La llamada al método debe corregirse, por ejemplo: add(5, 3).
3. Considerar agregar manejo de excepciones para casos de error.
```

---

### 2.2. Análisis de Complejidad de un Algoritmo

**Prompt:**

```markdown
Explica el funcionamiento del siguiente algoritmo de ordenamiento (quicksort), detallando su complejidad computacional en promedio y en el peor de los casos.
```

```python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)
```

**Salida esperada:**

```text
El algoritmo quicksort implementado aquí tiene una complejidad promedio de O(n log n), ya que divide el arreglo en dos subarreglos en cada llamada recursiva. Sin embargo, en el peor de los casos (por ejemplo, cuando el pivote es el elemento mínimo o máximo repetidamente) la complejidad puede degradarse a O(n^2).
```

---

## 3. Ejemplos Avanzados con Formato de Salida Estructurada

### 3.1. Salida en Formato JSON para Datos de Producto

**Prompt:**

```markdown
Dada la siguiente información de productos, genera una salida en formato JSON que contenga el total por producto y el total general de la compra.
```

```text
Producto A: $10, Cantidad: 2
Producto B: $5, Cantidad: 5
Producto C: $20, Cantidad: 1
```

**Salida esperada:**

```json
{
  "productos": [
    {"nombre": "Producto A", "precio": 10, "cantidad": 2, "total": 20},
    {"nombre": "Producto B", "precio": 5, "cantidad": 5, "total": 25},
    {"nombre": "Producto C", "precio": 20, "cantidad": 1, "total": 20}
  ],
  "total_general": 65
}
```

---

## 4. Ejemplo de Cálculo Técnico y Validación de Resultados

### 4.1. Verificar Solución Matemática de un Problema

**Prompt:**

```markdown
Realiza los siguientes pasos:
1. Calcula la suma de los números pares en la lista: [2, 4, 6, 8, 10].
2. Compara tu resultado con la solución propuesta por un estudiante (por ejemplo, 30).
3. Indica si la solución del estudiante es correcta o incorrecta, mostrando el cálculo realizado.
```

**Salida esperada:**

```text
Paso 1: Los números pares son 2, 4, 6, 8, 10.
Paso 2: La suma de estos números es 2 + 4 + 6 + 8 + 10 = 30.
Paso 3: La solución del estudiante es correcta.
```


