
import "./NumerosImpares.css";

function NumerosImpares({ numeros }) {
  const pares = numeros.filter((numero) => numero % 2 === 1);

  return (
    <ul className="NumerosImpares">

      {pares.map((numero, index) => (
        <li key={index}>{numero}</li>
      
      
      ))}
    
    </ul>
  );
}

export default NumerosImpares;