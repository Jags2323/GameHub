import React from 'react'
import useTest from '../hooks/useTest'
import { List, ListItem } from '@chakra-ui/react';

const Testing = () => {

    const { gamesData } = useTest();
    
  return (
      <div>
          <List>
              {gamesData.map(game => <ListItem>{game.name}</ListItem>)}
          </List>
    </div>
  )
}

export default Testing