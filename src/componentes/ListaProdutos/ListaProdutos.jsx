import "./ListaProdutos.css";

const ListaProdutos = (props) => {
  return (
    <ul className="ListaProdutos">
      {props.produtos.map((produtos, index) => {
        return <li key={index}> {produtos}</li>;
      })}
    </ul>
  );
};

export default ListaProdutos;
