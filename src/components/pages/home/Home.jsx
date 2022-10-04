import React, { useState, useEffect } from "react";
import "./Home.css";


export default function Home() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:64719/api/tarefas")
      .then((response) => response.text())
      .then((result) => {
        const parse = JSON.parse(result);
        setItem(parse);
      })
  };
  console.log(`data:${JSON.stringify(item)}`)
  return (
    <table className="table mt-4">
      <thead>
        <tr>
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
              <td>{items.dataCadastro}</td>
            </tr>
          </tbody>
        )
      })}
    </table>
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


