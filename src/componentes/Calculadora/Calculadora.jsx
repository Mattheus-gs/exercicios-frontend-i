import "./Calculadora.css";

const Calculadora = (props) => {
  const num1 = Number(props.num1);
  const num2 = Number(props.num2);
  const oper = Number(props.oper);
  let total
  let operacaotela

    switch (oper){
        case 1:
            total = num1 + num2;
            operacaotela = "+"
            break
            case 2:
            total = num1 - num2;
            operacaotela = "-"
            break
            case 3:
            total = num1 / num2;
            operacaotela = "/"
            break
            case 4:
            total = num1 * num2;
            operacaotela = "*"
            break
            default:
            console.log("numero incorreto");
    }



  return (
    <div className="Calculadora">
      {props.num1} * {props.num2} {operacaotela} {total}
    </div>
  );
};

export default Calculadora;
