import Filter from "./Filter"
import List from "./List"
import data from "../data.json"
import { useState } from "react"

const Main = () => {
  const [nameSearch, setNameSearch]=useState('')
  const [edad, setEdad]=useState('150')
  const [tipoElo, setTipoElo]=useState('0')
  return (
    <main className="max-w-4xl mx-auto py-4">
      <Filter
        nameSearch={nameSearch}
        edad={edad}
        tipoElo={tipoElo}
        onChangeName={(event)=>setNameSearch(event.target.value)} 
        onChangeEdad={(event)=>setEdad(event.target.value)} 
        onChangeTipoElo={(event)=>setTipoElo(event.target.value)}/>

      <List data={data} nameSearch={nameSearch} edad={edad} tipoElo={tipoElo}/>
    </main>
  )
}

export default Main