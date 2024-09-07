import { SimpleGrid } from '@chakra-ui/react'

import PokemonCard from './PokemonCard'

type Pokemon = {
  name: string
  image: string
  type: string
}

const pokemons: Pokemon[] = [
  {
    name: 'Bulbasaur',
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    type: 'Grass'
  },
  {
    name: 'Charmander',
    image: 'https://img.pokemondb.net/artwork/charmander.jpg',
    type: 'Fire'
  },
  {
    name: 'Squirtle',
    image: 'https://img.pokemondb.net/artwork/squirtle.jpg',
    type: 'Water'
  }
]

const PokemonList: React.FC = () => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={10} p={5}>
      {pokemons.map(pokemon => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon.image}
          type={pokemon.type}
        />
      ))}
    </SimpleGrid>
  )
}

export default PokemonList
