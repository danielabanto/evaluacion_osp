import React, {useState} from 'react'

const INITIAL_STATE= [
  {
    id: 1,
    name: 'X Men: Dias del futuro pasado',
    fpub: "2016-05-10",
    active: true
  },
  {
    id: 2,
    name: 'Alicia en el país de las maravillas',
    fpub: "2016-05-17",
    active: false
  },
  {
    id: 3,
    name: 'Locos de amor',
    fpub: "2016-05-24",
    active: true
  },
  {
    id: 4,
    name: 'Tortugas Ninjas 2',
    fpub: "2016-05-31",
    active: true
  }
]

const Context = React.createContext({})

export function ContextProvider ({children}) {
  const [peliculas, setPeliculas] = useState(INITIAL_STATE)
  return(
    <Context.Provider value={{peliculas, setPeliculas}}>
      {children}
    </Context.Provider>
  )
}

export default Context
