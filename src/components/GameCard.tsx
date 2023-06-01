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
import { animated, useSpring, config } from "@react-spring/web";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const [isFavorite, setFavorite] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleFavoriteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setFavorite(!isFavorite);
  };

  const handleCardEnter = () => {
    setHovered(true);
  };

  const handleCardLeave = () => {
    setHovered(false);
  };

  const cardAnimation = useSpring({
    transform: `scale(${hovered ? 1.03 : 1})`,
    boxShadow: hovered ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none",
    opacity: hovered ? 1 : 0.9,
    borderRadius: hovered ? "10px" : "0px",
    config: { tension: 300, friction: 20 },
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
      onMouseEnter={handleCardEnter}
      onMouseLeave={handleCardLeave}
      style={cardAnimation}
    >
      <Link to={"/games/" + game.slug}>
        <Card borderRadius={10} overflow="hidden" key={game.id}>
          <Image src={game.background_image} />
          <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
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
              {/* Render the user login/signup component here */}
            </HStack>
          </CardBody>
        </Card>
      </Link>
    </animated.div>
  );
};

export default GameCard;
