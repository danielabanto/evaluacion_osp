import React, {useState} from 'react'

const INITIAL_STATE= [
  
  {
    id: 1,
    name: '13:30',
    active: true
  },
  {
    id: 2,
    name: '15:00',
    active: false
  },
  {
    id: 3,
    name: '15:30',
    active: true
  },
  {
    id: 4,
    name: '16:00',
    active: true
  }
]

const Context = React.createContext({})

export function TurnosContextProvider ({children}) {
  const [turnos, setTurnos] = useState(INITIAL_STATE)
  return(
    <Context.Provider value={{turnos, setTurnos}}>
      {children}
    </Context.Provider>
  )
}

export default Context
