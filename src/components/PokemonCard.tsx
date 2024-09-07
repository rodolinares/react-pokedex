import { Box, Image, Badge, Text } from '@chakra-ui/react'

type PokemonCardProps = {
  name: string
  image: string
  type: string
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, image, type }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
      <Image src={image} alt={name} />
      <Box p={6}>
        <Text fontWeight="bold" fontSize="xl">
          {name}
        </Text>
        <Badge borderRadius="full" px="2" colorScheme="teal">
          {type}
        </Badge>
      </Box>
    </Box>
  )
}

export default PokemonCard
