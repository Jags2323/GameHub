import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genres } from "../hooks/useGenres";
import SearchInput from "./SearchInput";

interface Props {
  selectedGenre: Genres | null;
  searchText: string;
}

const GameGrid = ({ selectedGenre, searchText }: Props) => {
  const { games, error, isLoading } = useGames(selectedGenre, searchText);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      {error && (
        <Text fontSize="3xl" color="tomato">
          We are Sorry. Something is not right with us!
        </Text>
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={8}
        spacing={7}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
