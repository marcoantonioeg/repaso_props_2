import React from 'react'

const Person = ({nombre, edad, color}) => {
  return (
    <div>
        <h3 style={{color}}>Nombre: {nombre}</h3>
        <p>Edad: {edad}</p>
    </div>
  )
}

export default Person