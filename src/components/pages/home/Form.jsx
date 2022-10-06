import React from 'react';

import Table from "./Table";
import TextInput from "../../form/TextInput";


export default function Form() {
    return (
        <>
            <div className="title-container">
                <h1>Tabela de tarefas</h1>
            </div>
            <Table />
            <div className="form">
                <div className="row">
                    <TextInput
                        label="ID"
                        name="id"
                        placeholder="ID"
                    />
                    <TextInput
                        label="Nome"
                        name="nome"
                        placeholder="Nome"
                    />
                    <TextInput
                        label="Detalhes"
                        name="detalhes"
                        placeholder="Detalhes"
                    />
                    <TextInput
                        label="Data de cadastro"
                        name="dataCadastro"
                        placeholder="Data de cadastro"
                    />
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <button className="btn btn-success">Salvar</button>
                <button className="btn btn-warning">Limpar</button>
            </div>
        </>
    )
}