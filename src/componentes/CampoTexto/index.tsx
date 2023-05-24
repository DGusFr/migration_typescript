import './CampoTexto.css'

interface CampoTextoProps {
    //função que recebe uma string e retorna 'void' 
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor:string 
    obrigatorio: boolean
    //tipo?: significa atributo opcional. 'text', 'password',... são possuveis valores pré definidos que tipo pode receber
    tipo?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const CampoTexto = ({ aoAlterado, placeholder, label, valor, obrigatorio = false, tipo='text'} : CampoTextoProps) => {

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
                type={tipo}
            />
        </div>
    )
}

export default CampoTexto