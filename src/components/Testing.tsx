import React from 'react'
import useTest from '../hooks/useTest'
import { List, ListItem, Spinner, Text } from '@chakra-ui/react';

const Testing = () => {

    const { gamesData, error, isLoading } = useTest();
    
    return (
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {error && (
              <Text fontSize="3xl" color="tomato">
                We are Sorry. Something is not right with us!
              </Text>
            )}
    
            <List>
              {gamesData.map((game) => (
                <ListItem key={game.id}>
                  {game.name} {game.id}
                </ListItem>
              ))}
            </List>
          </>
        )}
      </div>
    );
}

export default Testing