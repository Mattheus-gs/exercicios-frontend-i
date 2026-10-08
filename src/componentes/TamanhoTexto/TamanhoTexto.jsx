import "./TamanhoTexto.css"

const TamanhoTexto = (props) => {
        const letras = props.texto
        const numero = letras.length

    return( <div className="TamanhoTexto">
    O texto possui {numero} caracteres.
    </div>
    )
}

export default TamanhoTexto;