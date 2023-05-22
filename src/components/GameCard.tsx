import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image, List, ListItem, Text, VStack } from '@chakra-ui/react'
import CritcScore from './CritcScore'
import IconList from './IconList';

interface Props{
    game: Game
}

const GameCard = ({game} : Props) => {
  return (
      <div>
          <Card borderRadius={10} overflow={'hidden'} key={game.id}>
              <Image src={game.background_image} />
              <CardBody>
                  <Heading fontSize='2xl'>{game.name}</Heading>
          <HStack justifyContent={'space-between'}>
          <IconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
                      <CritcScore game={game} />
                </HStack>
              </CardBody>
        </Card>
    </div>
  )
}

export default GameCard