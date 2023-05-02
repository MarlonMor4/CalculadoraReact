import React, { useState } from 'react';
import './calculator.css'; // Importa los estilos CSS


/* Funcion de grafica */ 
const Calculator = () => {
  const [result, setResult] = useState('');

  /* Actualiza por cada boton presionado recibe el parametro del boton presionado ;
  la funcion setResult() ayuda aconcatenar los valores presionado, lo que significa que se agrega a ek final de la concatenacion*/ 
  const handleButtonClick = (value) => {
    setResult(result + value);
  };
  /* Se encarga de evaluar la expresion matematica ,utilizando el metodo eval()si es valida arroja el valor de lo contario error */
  const handleCalculate = () => {
    try {
      const calculatedResult = eval(result);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };
 /*Se encarga de restablecer la calculadora o limpiar el resultado  */
  const handleClear = () => {
    setResult('');
  };
  

  /*readOnly  es para que no se escriba directamente si no que el usuario ingrese los numeros presionando el boton
  */
  return (
    <div className="calculator-container"> 
      
      <input type="text" value={result} readOnly />
      <div>
      <button onClick={() => handleButtonClick('7')}>7</button>
      <button onClick={() => handleButtonClick('8')}>8</button>
      <button onClick={() => handleButtonClick('9')}>9</button>
      <button className="operation" onClick={() => handleButtonClick('/')}>/</button>
    </div>
    <div>
      <button onClick={() => handleButtonClick('4')}>4</button>
      <button onClick={() => handleButtonClick('5')}>5</button>
      <button onClick={() => handleButtonClick('6')}>6</button>
      <button className="operation" onClick={() => handleButtonClick('*')}>*</button>
    </div>
    <div>
      <button onClick={() => handleButtonClick('1')}>1</button>
      <button onClick={() => handleButtonClick('2')}>2</button>
      <button onClick={() => handleButtonClick('3')}>3</button>
      <button className="operation" onClick={() => handleButtonClick('-')}>-</button>
    </div>
      <div>
      <button onClick={() => handleButtonClick('0')}>0</button>
      <button onClick={() => handleCalculate()}>=</button>
      <button onClick={() => handleClear()}>C</button>
      <button className="operation"  onClick={() => handleButtonClick('+')}>+</button>
      </div>
    </div>
  );
};

export default Calculator;
