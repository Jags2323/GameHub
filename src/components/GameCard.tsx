import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import CritcScore from './CritcScore'

interface Props{
    game: Game
}

const GameCard = ({game} : Props) => {
  return (
      <div>
          <Card borderRadius={10} overflow={'hidden'}>
              <Image src={game.background_image} />
              <CardBody>
                  <Heading fontSize='2xl'>{game.name}</Heading>
                  <HStack justifyContent={'space-between'}>
                  {game.parent_platforms.map((platform) => 
                      <Text>{platform.platform.slug}</Text>
                    //   <VStack >{platform.platform.slug[0] }</VStack>
                  )}
                      <CritcScore game={game} />
                </HStack>
              </CardBody>
        </Card>
    </div>
  )
}

export default GameCard