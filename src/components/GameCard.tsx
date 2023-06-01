import { Game } from "../hooks/useGames";
import {
  Box,
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
import { animated, useSpring, config } from "@react-spring/web";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const [isFavorite, setFavorite] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleFavoriteClick = () => {
    setFavorite(!isFavorite);
  };

  const cardAnimation = useSpring({
    transform: hovered ? "scale(1.03)" : "scale(1)",
    boxShadow: hovered ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none",
  });

  const favoriteButtonAnimation = useSpring({
    opacity: isFavorite || hovered ? 1 : 0,
    transform: isFavorite || hovered ? "scale(1)" : "scale(0)",
    config: config.gentle,
  });

  const iconAnimation = useSpring({
    transform: `rotateY(${isFavorite ? 180 : 0}deg)`,
    color: isFavorite ? "red.500" : "gray.500",
  });

  return (
    <animated.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={cardAnimation}
    >
      <Card borderRadius={10} overflow="hidden" key={game.id}>
        <Image src={game.background_image} />
        <CardBody>
          <Box>
            <Heading fontSize="2xl">
              <Link to={"/games/" + game.slug}>{game.name}</Link>
            </Heading>
            <HStack justifyContent="space-between">
              <IconList
                platforms={game.parent_platforms?.map((p) => p.platform)}
              />
              <CritcScore game={game} />
            </HStack>
            <HStack mt={4}>
              <animated.div style={favoriteButtonAnimation}>
                <Tooltip
                  label={
                    isFavorite ? "Remove from favorites" : "Add to favorites"
                  }
                >
                  <animated.div style={iconAnimation}>
                    <IconButton
                      aria-label="Favorite"
                      icon={<FaHeart />}
                      color={isFavorite ? "red.500" : "gray.500"}
                      onClick={handleFavoriteClick}
                    />
                  </animated.div>
                </Tooltip>
              </animated.div>
            </HStack>
          </Box>
        </CardBody>
      </Card>
    </animated.div>
  );
};

export default GameCard;
