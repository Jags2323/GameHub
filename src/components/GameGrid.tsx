import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

interface Game{
    id: number,
    name: string,
    rating: number
}

interface FetchGameresponse{
    count: number,
    results: Game[]
}

const GameGrid = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [errors, setErrors] = useState('');

    useEffect(() => {
        apiClient.get<FetchGameresponse>('/games')
            .then((res) => setGames(res.data.results))
            .catch(err => setErrors(err.message));
  })
    return (
    <div>
            {
                games.map(game => <li key={game.id}> {game.name} {' '} {game.rating }</li>)
        }
    </div>
  )
}

export default GameGrid