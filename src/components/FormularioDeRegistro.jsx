import React from 'react'
import { useState } from "react"


const FormularioDeRegistro = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [endereco, setEndereco] = useState('')
    const [telefone, setTelefone] = useState('')

    /*const validarPassword = (Password, ConfirmPassword) => {
        if (password === confirmPassword) {          
        } else {
            alert = ("senha não confere");
         }         
    }*/

    const handleSubmit = (event) => {
        event.preventDefault()

        const dadosDoForm = {
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            endereco: endereco,
            telefone: telefone
        }
        const jsonParaEnviarParaOBack = JSON.stringify(dadosDoForm)

        console.log (`O seguinte JSON será enviado via HTTP POST para o bach-end: ${jsonParaEnviarParaOBack}`)
    }
        

        

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Nome:</label>
                <input 
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="password">Senha:</label>
                <password
                    type="text"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="confirmPassword">Confirme a Senha:</label>
                <password
                    type="text"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="endereco">Endereço:</label>
                <password
                    type="endereco"
                    id="endereco"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="telefone">Telefone:</label>
                <password
                    type="telefone"
                    id="telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                />
            </div>

            <button type="submit">Enviar</button>

        </form>
        
    </>
  )
}

export default FormularioDeRegistro