const Filter = ({
  nameSearch,
  edad,
  tipoElo,
  onChangeName,
  onChangeEdad,
  onChangeTipoElo
}) => {

  const handleClear=()=>{
    if(onChangeName) onChangeName({target: {value:''}})
    if(onChangeEdad) onChangeEdad({target: {value:''}})
    if(onChangeTipoElo) onChangeTipoElo({target: {value:''}})
  }

  return (
      <form className="flex flex-col sm:flex-row gap-4 mb-10 w-full rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
        <div className="relative flex items-center justify-between rounded-md">
          <svg className="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8" className=""></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
          </svg>
          <input value={nameSearch} onChange={onChangeName} type="name" name="search" className="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-2 sm:pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Filtrar por nombre" />
        </div>

        <select onChange={onChangeTipoElo} value={tipoElo} id="manufacturer" className="rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
          <option >Filtrar por ritmo</option>
          <option value="0">Clasico</option>
          <option value="1">Rapido</option>
          <option value="2">Relampago</option>
        </select>
        <select  onChange={onChangeEdad} value={edad} id="manufacturer" className="rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
          <option >Filtrar por Edad</option>
          <option value="12">Sub 12</option>
          <option value="14">Sub 14</option>
          <option value="16">Sub 16</option>
          <option value="18">Sub 18</option>
          <option value="150">Absoluto</option>
        </select>
      <button type='button' onClick={handleClear} className="bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition px-6 py-2 rounded-md" >Limpiar</button>      
      </form>

  );
};

export default Filter;
