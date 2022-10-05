import React from "react";
import "./Home.css";

import TextInput from "../../form/TextInput";
import Table from "./Table";

export default function Home() {

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























// export default function Home() {
//   const [item, setItem] = useState([]);
//   const [tarefas, setTarefas] = useState({
//     id: "",
//     nome: "",
//     detalhes: "",
//     dataCadastro: "",
//   })
//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = () => {
//     fetch("http://localhost:64719/api/tarefas")
//       .then((response) => response.text())
//       .then((result) => {
//         const parse = JSON.parse(result)
//         setItem(parse)
//       });
//   };
//   console.log(`data:${JSON.stringify(item)}`)

//   return (
//     <div>
//       <table className="table mt-4">
//         <tr>
//           <th>Id</th>
//           <th>Nome</th>
//           <th>Detalhes</th>
//         </tr>
//         {item.map((items, key) => {
//           return (
//             <tr key={key}>
//               <td>{items.id}</td>
//               <td>{items.nome}</td>
//               <td>{items.detalhes}</td>
//               <td>{items.dataCadastro}</td>
//             </tr>
//           )
//         })}
//       </table>
//     </div>
//   );
// }


