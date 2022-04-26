import React from 'react'

export default function FormSelect({ handleChange , handleChange1 }) {
    return (
        <div className=" mx-5">
            <h1 className="mt-5">Seleccione la categoria y el pais</h1>
        <select onChange={handleChange}>
          <option value="business">Negocios</option>
          <option value="entertainment">Entretenimiento</option>
          <option value="general">General</option>
          <option value="health">Salud</option>
          <option value="sports">Deportes</option>
          <option value="technology">Tecnologia</option>
        </select>
        <select  className="my-4 mx-3" onChange={handleChange1}>
          <option value="us">EEUU</option>
          <option value="br">Brasil</option>
          <option value="mx">Mexico</option>
          <option value="nz">Nueva Zelanda</option>
        </select>
        </div>
    )
}
