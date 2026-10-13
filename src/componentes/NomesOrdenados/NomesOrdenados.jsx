
import "./NomesOrdenados.css";

function NomesOrdenados({ nomes }) {
  const nomesOrdenados = [...nomes].sort((a, b) =>
    a.localeCompare(b)
  );

  return (
    <ol className="NomesOrdenados">
      {nomesOrdenados.map((nome, index) => (
        <li key={index}>{nome}</li>
      ))}
    </ol>
  );
}

export default NomesOrdenados;