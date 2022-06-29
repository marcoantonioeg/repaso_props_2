import React from 'react'
import Person from './components/Person'

const App = () => {
  return (
    <div>
        <h1>Hola Mundo</h1>
        <Person nombre="Pedro" edad={27} color="red"/>
        <Person nombre="Alejandro" edad={30} color="blue"/>
        <Person nombre="Sofía" edad={18} color="green"/>
    </div>
  )
}

export default App