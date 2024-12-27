import ItemsList from "./ItemsList";
import FlashOnIcon from '@mui/icons-material/FlashOn';
import TimerIcon from '@mui/icons-material/Timer';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { useState, useEffect } from "react";

const List = ({data, nameSearch, edad, tipoElo}) => {
  const [jugadores, setJugadores]=useState(data)

  useEffect(()=>{
    if( !tipoElo ) return
    setJugadores( prev => [...prev].sort((a,b) => b.elo[tipoElo]-a.elo[tipoElo]) )
  },[tipoElo])

  return (

      <ul className="rounded-xl border border-gray-200 bg-slate-50 shadow-lg my-10 overflow-hidden">
        <li className="grid grid-cols-7 px-4 py-3 font-bold items-center text-white bg-[#1d294f]">
          <div>#</div>
          <div className="col-span-3 flex">Nombre</div>
          <PsychologyIcon />
          <TimerIcon />
          <FlashOnIcon />
        </li>
        {
          jugadores
          .filter(jugador => nameSearch.trim() ? jugador.nombre.toLowerCase().includes(nameSearch.toLowerCase()) : true )
          .filter(jugador => edad ? jugador.edad<edad : true )
          .map((jugador, index)=>{
            return <ItemsList key={index} nombre={jugador.nombre} elo={jugador.elo} index={index+1}/>
          })
        }      
      
      </ul>
       
  )
}

export default List