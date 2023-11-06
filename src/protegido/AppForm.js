import React from 'react'

const AppForm = (props) => {
  return (
    <div style ={{background:"orange", padding:"10px"}}>
     <form>
        <button> Cerrar aplicación</button>
        
        <h2>Registrar (AppForm.js)</h2>
       
        <input name ='nombre' type='text' placeholder='Nombre...'></input>   
        <input name ='edaD' type='text' placeholder='Edad...'></input>  
        <select>
            <option value ="">Seleccionar género...</option>
            <option value ="Masculino">Masculino</option>
            <option value ="Femenino">Femenino</option>
        </select> <br/>
        
        <button>Guardar / Actualiazar</button>
     </form>
    </div>
  )
}

export default AppForm
