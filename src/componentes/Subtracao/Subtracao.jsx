import "./Subtracao.css"

const Subtracao = (props) => {
    const num1 = Number(props.num1)
    const num2 = Number(props.num2)
    const total = num1 - num2;

    return( <div className="Subtracao">
    {props.num1} - {props.num2} = {total}
    </div>
    )
}

export default Subtracao;