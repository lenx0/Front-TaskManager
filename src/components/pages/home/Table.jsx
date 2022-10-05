import React, { useState, useEffect } from 'react';
import moment from "moment";


export default function table() {
    const [item, setItem] = useState([]);
    

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
                            <div>
                                <td>
                                    <button className='btn btn-success m-1' type="submit"><i className="fa-solid fa-floppy-disk"></i></button>
                                    <button className='btn btn-warning m-1'><i className="fa-solid fa-pen-to-square"></i></button>
                                    <button className='btn btn-secondary m-1'><i className="fa-solid fa-broom"></i></button>
                                    <button className="btn btn-danger m-1"><i className="fa-solid fa-trash"></i></button>
                                </td>
                            </div>
                            <td>{items.id}</td>
                            <td>{items.nome}</td>
                            <td>{items.detalhes}</td>
                            <td>{moment(items.dataCadastro).format("DD/MM/yyyy HH:mm:ss")}</td>
                        </tr>
                    </tbody>
                )
            })}
        </table>
    )
}