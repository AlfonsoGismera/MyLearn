### 1. JSX (JavaScript XML)

**Qué es y por qué se usa:**  
JSX es una extensión de sintaxis para JavaScript que permite escribir estructuras de marcado similares a HTML dentro del código JavaScript. Esto resulta muy útil porque te permite describir la interfaz de usuario de forma declarativa, integrando de forma natural la lógica y la presentación. Aunque el código JSX se parece a HTML, en realidad es transformado (transpilado) en llamadas a funciones de React, como `React.createElement`, durante el proceso de compilación.

**Características importantes:**  
**Expresividad:** Puedes incluir expresiones de JavaScript dentro de llaves `{}`.
**Legibilidad:** Hace que el código sea más intuitivo al tener una sintaxis similar a HTML, facilitando la comprensión de la estructura de la UI.
**Requerimientos:** JSX debe estar contenido en un único elemento contenedor o utilizar fragmentos (`<>...</>`) para evitar errores.

---

### 2. React Components

**Concepto general:**  
Los componentes son las piezas fundamentales de una aplicación en React. Cada componente encapsula su propia lógica, estado y presentación, lo que facilita la reutilización y el mantenimiento del código.

**Tipos de componentes:**  
**Componentes Funcionales:**  
  Son funciones de JavaScript que reciben propiedades (props) como argumento y retornan elementos JSX. Con la introducción de los Hooks, estos componentes pueden gestionar estado y efectos secundarios, lo que los hace cada vez más populares.
  *Ejemplo:*  
  ```jsx
  function Saludo({ nombre }) {
    return <h1>Hola, {nombre}</h1>;
  }
  ```
**Componentes de Clase:**  
  Antes de los Hooks, los componentes de clase eran la principal manera de gestionar el estado y los ciclos de vida. Extienden de `React.Component` y deben implementar un método `render` para retornar los elementos de la UI.
  *Ejemplo:*  
  ```jsx
  class Saludo extends React.Component {
    render() {
      return <h1>Hola, {this.props.nombre}</h1>;
    }
  }
  ```

---

### 3. Components Interacting (Interacción entre Componentes)

**Comunicación entre componentes:**  
En React, la interacción entre componentes se establece principalmente a través de las props y el estado compartido. Estas son algunas de las técnicas clave:

**Pasaje de Props:**  
  Los componentes padres pueden enviar datos y funciones a los componentes hijos mediante props. Este método es unidireccional: el flujo de datos va de padre a hijo.
  *Ejemplo:*  
  ```jsx
  function Padre() {
    const mensaje = "Hola desde el padre";
    return <Hijo mensaje={mensaje} />;
  }
  ```

**Lifting State Up (Elevar el Estado):**  
  Cuando varios componentes necesitan compartir información, se "eleva" el estado al componente ancestro común más cercano, que se encarga de gestionar y distribuir ese estado a través de props.

**Context API:**  
  React ofrece el Context API para compartir datos de manera global (como temas, preferencias o datos de usuario) sin tener que pasar explícitamente props en cada componente.

**Comunicación mediante Callbacks:**  
  Los componentes hijos pueden notificar a sus padres sobre eventos o cambios pasando funciones como props. Esto permite que el componente padre actualice el estado o tome decisiones basadas en la acción del hijo.

---

### 4. Hooks

**Introducción y propósito:**  
Los Hooks fueron introducidos en React 16.8 para permitir que los componentes funcionales puedan tener estado y manejar ciclos de vida sin necesidad de recurrir a componentes de clase. Esto hace que el código sea más limpio y fácil de entender.

**Hooks básicos y ejemplos:**  
**useState:**  
  Permite definir variables de estado en un componente funcional.
  ```jsx
  const [contador, setContador] = useState(0);
  ```
**useEffect:**  
  Se utiliza para manejar efectos secundarios, como llamadas a APIs, suscripciones o manipulación del DOM. Se ejecuta después de cada renderizado o cuando cambian las dependencias especificadas.
  ```jsx
  useEffect(() => {
    // Código a ejecutar después del render
    document.title = `Contador: ${contador}`;
  }, [contador]);
  ```
**useContext:**  
  Facilita el acceso a un valor del Context API sin necesidad de envolver el componente en un Consumer.
**Otros Hooks:**  
  Hooks como `useReducer`, `useMemo` y `useCallback` ayudan a manejar casos más complejos, como la optimización del rendimiento y la gestión de estados complejos.

**Importancia de la regla de los Hooks:**  
Todos los Hooks deben llamarse en el mismo orden en cada render para que React pueda asociar correctamente el estado y el ciclo de vida con cada uno de ellos.

---

### 5. React Programming Patterns (Patrones de Programación en React)

**Objetivo:**  
Estos patrones ayudan a estructurar y organizar el código de manera que sea más modular, reutilizable y fácil de mantener.

**Patrones comunes:**  
**Higher-Order Components (HOC):**  
  Son funciones que toman un componente y devuelven un nuevo componente con funcionalidades añadidas, permitiendo reutilizar lógica entre componentes sin modificar su estructura interna.
  ```jsx
  function withLogging(WrappedComponent) {
    return function(props) {
      console.log('Rendering', WrappedComponent.name);
      return <WrappedComponent {...props} />;
    };
  }
  ```
**Render Props:**  
  Consiste en pasar una función como prop a un componente, l
