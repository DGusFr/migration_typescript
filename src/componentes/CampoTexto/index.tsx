import './CampoTexto.css'

interface CampoTextoProps {
    //função que recebe uma string e retorna 'void' 
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor:string 
    obrigatorio: boolean
}

const CampoTexto = (props: CampoTextoProps) => {

    const placeholderModificada = `${props.placeholder}...` 

    //evento do react:
    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input 
                value={props.valor} 
                onChange={evento => aoDigitado} 
                required={props.obrigatorio} 
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default CampoTexto