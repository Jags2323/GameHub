import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Text } from '@chakra-ui/react'

interface Game{
    id: number,
    name: string,
    rating: number,
    background_image: string
}

interface FetchGameresponse{
    count: number,
    results: Game[]
}

interface Props{
    game: Game
}

const GameCard = ({ game } : Props) => {
    return (
      <div className="game-card">
        <img width='500px' src={game.background_image} alt={game.name} />
        <h2>{game.name}</h2>
        <p>{game.rating}</p>
      </div>
    );
};
  
const GameGrid = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        apiClient.get<FetchGameresponse>('/games')
            .then((res) => setGames(res.data.results))
            .catch(err => setError(err.message));
  })
    return (
        <div>
            {error && <Text fontSize='3xl' color='tomato'>We are Sorry. Something is not right with us!</Text>}
            {games.map(game => <GameCard key={game.name} game={game} />)}
        </div>
  )
}

export default GameGrid