import { Box, Heading } from '@chakra-ui/react'

const Header: React.FC = () => {
  return (
    <Box textAlign="center" bg="teal.500" py={4}>
      <Heading color="white">Pokedex</Heading>
    </Box>
  )
}

export default Header
