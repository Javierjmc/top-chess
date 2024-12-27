import {useState} from "react";

const ItemsList = ({nombre, elo, index, id}) => {
  return (
    <li className="text-sm hover:font-semibold sm:text-base grid grid-cols-7 px-4 py-2 hover:bg-blue-200/50 transition hover:translate-y-0.5 ">  
      <div>{index}</div>
      <a href={`https://ratings.fide.com/profile/${id}`} target="_blank" className="col-span-3 hover:underline">{nombre}</a>
      <div>{elo[0]}</div>
      <div>{elo[1]}</div>
      <div>{elo[2]}</div>              
    </li>
  )
}

export default ItemsList