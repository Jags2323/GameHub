import { Box, Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useScreenshots from "../hooks/useScreenshots";
import '../styles/GameScreenshots.css';
interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return <Spinner size="xl" />;

  if (error) throw error;

  const screenshots = data?.results || [];
  const defaultImage = screenshots[0]?.image;

  return (
    <Box display="flex" justifyContent="center">
      <Carousel
        showArrows={true}
        showStatus={true}
        showThumbs={false}
        centerMode={true}
        centerSlidePercentage={100}
        renderIndicator={(onClickHandler, isSelected, index, label) => (
          <div
            onClick={onClickHandler}
            key={index}
            className={`thumb ${isSelected ? "selected" : ""}`}
            title={label}
          >
            {data && data.results[index] ? (
              <img className="screenshot-thumbnail" src={data.results[index].image} alt="Thumbnail" />
            ) : (
              <Spinner size="sm" />
            )}
          </div>
        )}
      >
        {data?.results.map((screenshot) => (
          <div key={screenshot.id} className="screenshot-container">
            {screenshot.image ? (
              <img className="screenshot-image" src={screenshot.image} alt="Screenshot" />
            ) : (
              <Spinner size="xl" />
            )}
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default GameScreenshots;
