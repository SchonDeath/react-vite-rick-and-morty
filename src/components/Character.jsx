 
function Character({character}) {
    return (
      <div  className="text-center p-5">
      <h3>{character.name}</h3>
      <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
    <p>Origen Planetario: {character.origin.name}</p>
    <p>Especie: {character.species}</p>
    <p>Estado: {character.status}</p>
      </div>
    )
  }
  
  export default Character