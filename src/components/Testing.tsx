import React from 'react'
import useTest from '../hooks/useTest'
import { List, ListItem, Text } from '@chakra-ui/react';

const Testing = () => {

    const { gamesData, error, isLoading } = useTest();
    
  return (
    <div>
      {error && <Text fontSize='3xl' color='tomato'>We are Sorry. Something is not right with us!</Text>}
      
          <List>
              {gamesData.map(game => <ListItem>{game.name}</ListItem>)}
          </List>
    </div>
  )
}

export default Testing