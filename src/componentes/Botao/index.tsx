import React, { ReactElement } from 'react'
import './Botao.css'

interface BotaoProps {
    children: ReactElement | string
}

//props = "criar card" escrito no botão
const Botao = (props: BotaoProps) => {
    return (
    <button className='botao'>
        {props.children}
    </button>)
}

export default Botao