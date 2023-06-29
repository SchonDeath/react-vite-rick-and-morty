import { useEffect, useState } from 'react'
//useEffect es un hook que permite ejecutar efectos secundarios en un componente, los efectos pueden ser de cualquier tpo operacion asincronica
//useState permite agregar estados a los componentes, en forma de almancer y adminstrar valores que pueden cambiar a lo largo del tiempo
import Character from './Character'

function CharacterList() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data = await response.json()
            //console.log(data)
            setCharacters(data.results)
        }
        fetchData();
    }, [])

    return (
        <div className='container '>
          <div className="row">
            {
                  characters.map(character => {
                    return (
                     <div className='col-md-4' key={character.id} >
                     <Character   character={character} />
                     </div>
                             
                    )
                })
            }
          </div>
        </div>
    )
}

export default CharacterList