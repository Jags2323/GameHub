import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import CritcScore from "./CritcScore";
import IconList from "./IconList";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
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
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
