import './CampoTexto.css'

interface CampoTextoProps {
    //função que recebe uma string e retorna 'void' 
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor:string 
    obrigatorio: boolean
}

const CampoTexto = ({ aoAlterado, placeholder, label, valor, obrigatorio } : CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    //evento do react:
    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                { label }
            </label>
            <input 
                value={valor} 
                onChange={evento => aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default CampoTexto