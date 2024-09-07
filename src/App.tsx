import { ChakraProvider, Container } from '@chakra-ui/react'
import Header from './components/Header'
import PokemonList from './components/PokemonList'

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Container maxW="container.xl" p={0}>
        <Header />
        <PokemonList />
      </Container>
    </ChakraProvider>
  )
}

export default App
