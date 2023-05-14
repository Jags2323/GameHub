import { useEffect, useState } from "react";
import { Game } from "./useGames";
import axios from "axios";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchGameresponse{
    count: number,
    results: Game[]
}

const useTest = () => {
    const [gamesData, setGamesData] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
    //let requestConfig : AxiosRequestConfig = { params: { genre: selectedGenre?.id } };

    //const deps = selectedGenre?.id;
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:9030/rawg/games');
            setGamesData(response.data);
          } catch (error) {
            console.error;
          }
        };
    
        fetchData();
      }, []);
  return {gamesData, error, isLoading}
}

export default useTest;