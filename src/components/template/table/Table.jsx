import React, { useState, useEffect } from "react";
import moment from "moment";
import "./Table.css";

export default function Home() {
    const [tarefa, setTarefa] = useState([]);

    const baseURL = "http://localhost:64719"

    useEffect(() => {
        fetch(`${baseURL}/api/tarefas`)
            .then((response) => response.text())
            .then((result) => {
                const parse = JSON.parse(result);
                setTarefa(parse);
            })
    })
    console.log(`Data: ${JSON.stringify(tarefa)}`);
    return (
        <>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>DETALHES</th>
                        <th>DATA DE CADASTRO</th>
                    </tr>
                </thead>
                {tarefa.map((item, key) => {
                    return (
                        <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.detalhes}</td>
                            <td>{moment(item.dataCadastro).format("DD/mm/yyyy")}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}




