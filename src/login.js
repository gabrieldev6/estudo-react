import React, { useState, useRef} from 'react'
import api from './services/api'
import { TbPassword } from "react-icons/tb";
import { MdEmail } from "react-icons/md";


export default function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const h1Ref = useRef()

    

    const getEmail = (event) => {
        setEmail(event.target.value)
        // console.log(email)
    }

    const getSenha = (event) => {
        setSenha(event.target.value)
        // console.log(senha)
    }

    const submit = (event) => {
        
        api.post('login', {
            email: email,
            senha: senha

        }).then((response) => {

            console.log(response)
            

        }).catch((err) => {

            console.log('deu algum erro: ' + err)
            
        })

        console.log(email)
        console.log(senha)
    }

    return (
        <div className='flex justify-center'>
            <div className='bg-gray-500 w-56 rounded-xl '>
                <div className='bg-white rounded-xl px-2 flex text-center justify-center'>
                    <input className='' placeholder='Email' type='text' onChange={getEmail} />
                    <MdEmail/>
                </div>
                <div className='bg-white rounded-xl px-2 flex text-center justify-center'>
                    <input placeholder='Senha' type='password' onChange={getSenha} />
                    <TbPassword/>
                </div>

                <button className='bg-blue-500 text-white rounded-xl px-2' onClick={submit}>Entrar</button>
                
            </div>
            <h1 ref={h1Ref}>valor</h1>
        </div>
    )
}


class Usuario {
    email
    senha

    constructor(email, senha) {
        this.email = email
        this.senha = senha


    }
    static create(email, senha) {
        new RegExp()
    }
}