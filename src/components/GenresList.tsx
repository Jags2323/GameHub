import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres'

const GenresList = () => {

    const { genres } = useGenres();

  return (
      <div>
          <List>
              {genres.map(genre => <ListItem key={genre.id} paddingY='5px'>
                  <HStack>
                      <Image boxSize='32px' borderRadius={8} src={genre.image_background} />
                      <Text>{ genre.name}</Text>
                  </HStack>
              </ListItem>)}
          </List>
    </div>
  )
}

export default GenresList