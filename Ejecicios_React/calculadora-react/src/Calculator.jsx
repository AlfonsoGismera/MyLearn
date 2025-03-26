import React, { useState, useEffect } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const handleEqual = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const handleClear = () => {
    setDisplay("");
  };

  const handleKeyPress = (event) => {
    const { key } = event;
    if (/[\d+\-*/.]/.test(key)) {
      setDisplay((prev) => prev + key);
    } else if (key === "Enter") {
      handleEqual();
    } else if (key === "Backspace") {
      setDisplay((prev) => prev.slice(0, -1));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="calculadora">
      <div className="pantalla">{display || "0"}</div>
      <div className="teclado">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map(
          (char) => (
            <button
              key={char}
              className="boton"
              onClick={() => (char === "=" ? handleEqual() : handleClick(char))}
            >
              {char}
            </button>
          )
        )}
      </div>
      <div className="fila-especial">
        <button className="boton" onClick={handleClear}>
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
