import {
  Box,
  Grid,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import GameScreenshots from "../components/GameScreenshots";
import "../styles/GameDetailPage.css";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <div className="background-image">
      <Heading fontSize="3xl" mb={4} textAlign="center">
        {game.name}
      </Heading>
      <GameScreenshots gameId={game.id} />
      <Text fontSize="lg" textAlign="center">
        {game.description_raw}
      </Text>
    </div>
  );
};

export default GameDetailPage;
