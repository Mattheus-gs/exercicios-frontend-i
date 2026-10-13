
import "./NumerosPares.css";

function NumerosPares({ numeros }) {
  const pares = numeros.filter((numero) => numero % 2 === 0);

  return (
    <ul className="NumerosPares">

      {pares.map((numero, index) => (
        <li key={index}>{numero}</li>
      
      
      ))}
    
    </ul>
  );
}

export default NumerosPares;