import React, { useState, useEffect } from 'react';
import moment from "moment";


export default function table() {
    const [item, setItem] = useState([]);
    const [tarefas, setTarefas] = useState({
        id: "",
        nome: "",
        detalhes: "",
        dataCadastro: "",
    })

    const baseURL = "http://localhost:64719/"

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetch(`${baseURL}api/tarefas`)
            .then((response) => response.text())
            .then((result) => {
                const parse = JSON.parse(result);
                setItem(parse);
            })
    };
    console.log(`data:${JSON.stringify(item)}`)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(tarefas)
        fetch('http://localhost:64719/api/tarefas',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(tarefas),
            })

            .then(resposta => {
                setTarefas({
                    id: "",
                    nome: "",
                    detalhes: "",
                    dataCadastro: "",
                })
                if (resposta.ok) {
                    console.log("tudo certo");
                } else {
                    console.log("algum problema...")
                }
            })
    }
    return (
        <table className="table table-striped">
            <thead className="table-">
                <tr>
                    <th>Ações</th>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Detalhes</th>
                    <th>DataCadastro</th>
                </tr>
            </thead>
            {item.map((items, key) => {
                return (
                    <tbody>
                        <tr key={key}>
                            <td>{items.id}</td>
                            <td>{items.nome}</td>
                            <td>{items.detalhes}</td>
                            <td>{moment(items.dataCadastro).format("DD/MM/yyyy HH:mm:ss")}</td>
                            <div>
                                <td>
                                    <button className='btn btn-primary m-1' onSubmit={handleSubmit} type="submit"><i className="fa-solid fa-floppy-disk"></i></button>
                                    <button className="btn btn-warning m-1"><i className="fa-solid fa-trash"></i></button>
                                </td>
                            </div>
                        </tr>
                    </tbody>
                )
            })}
        </table>
    )
}