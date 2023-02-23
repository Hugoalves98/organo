import './CampoTexto.css'

// const CampoTexto = () => {
//     return (
//         <div className="campo-texto">
//             <label>Nome</label>
//             <input placeholder='Digite o seu nome'/>
//         </div>
//     )
// }

const CampoTexto = (props) => {

    //const placeholderModificada = `${x.placeholder}...`

    //let valor = 'Hugo E Mandeta'

    /*
    const [valor, setValor] = useState('')

    const aoDigitado = (evento) => {
        //valor = evento.target.value
        setValor(evento.target.value)
        console.log(valor)
    } */

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input /*value={valor}*/ onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

/* 
    <input placeholder={x.placeholder}/>
    <input placeholder={placeholderModificada}/>
    <input placeholder={`${x.placeholder}...`}/>
*/ 

export default CampoTexto