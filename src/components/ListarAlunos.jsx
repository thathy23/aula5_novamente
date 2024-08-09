import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ListarAlunos = () => {

    const urlBase = "http://localhost:3000"
    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        axios.get(`${urlBase}/alunos`)
        .then(response => {
           setAlunos(response.data)
        })
        .catch(error => console.error("Ocorreu um erro: ",
          error))
    }, [])

    //faça um axios.get e entao(.then) se der certo,a resposta da requisição que vai dar certo traga aqui dentro

    return (
    <div>
       {
          alunos.map(aluno => (
            <p key={aluno.id}>{aluno.nome} -- {aluno.email}</p>
          ))
        }
    </div>
  )
}

export default ListarAlunos