import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  HStack,
  Heading,
  IconButton,
  Image,
  Tooltip,
} from "@chakra-ui/react";
import CritcScore from "./CritcScore";
import IconList from "./IconList";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const [isFavorite, setFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setFavorite(!isFavorite);
  };

  return (
    <div>
      <Card
        borderRadius={10}
        overflow={"hidden"}
        key={game.id}
        _hover={{
          transform: "scale(1.03)",
        }}
      >
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="2xl">
            <Link to={"/games/" + game.slug}>{game.name}</Link>
          </Heading>
          <HStack justifyContent={"space-between"}>
            <IconList
              platforms={game.parent_platforms?.map((p) => p.platform)}
            />
            <CritcScore game={game} />
          </HStack>
          <HStack mt={4}>
            <Tooltip
              label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <IconButton
                aria-label="Favorite"
                icon={<FaHeart />}
                color={isFavorite ? "red.500" : "gray.500"}
                onClick={handleFavoriteClick}
              />
            </Tooltip>
            {/* Render the user login/signup component here */}
          </HStack>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
