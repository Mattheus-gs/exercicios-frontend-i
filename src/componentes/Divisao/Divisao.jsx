import "./Divisao.css"

const Divisao = (props) => {
    const num1 = Number(props.num1)
    const num2 = Number(props.num2)
    const total = num1 / num2;

    return( <div className="Divisao">
    {props.num1} / {props.num2} = {total}
    </div>
    )
}

export default Divisao;