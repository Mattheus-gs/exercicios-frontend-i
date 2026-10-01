import "./ListaProdutos.css";


const ListaProdutos = (props) => {
    return (
        <>
        <ul className="ListaProdutos">{props.Lista}
            <li>Celular Sam</li>
            <li>Notebook</li>
            <li>Smart Tv</li>
            <li>Impressora HP</li>
            <li>Tablet Multilaser</li>
            <li>Monitor Dell</li>

        </ul>
        </>




    );
}

export default ListaProdutos;