import { Box, Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react'
import useScreenshots from '../hooks/useScreenshots';

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const {data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;
  
  if (error) throw error;
  const firstScreenshot = data?.results[0];

  return (
    <Box maxH="500px" overflowY="auto">
        {data?.results.map(firstScreenshot => 
        <Image key={firstScreenshot.id} src={firstScreenshot.image} />)}
      {/* <Image src={firstScreenshot?.image} alt="Screenshot" /> */}
    </Box>
  

//   return (
//     <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
//       {data?.results.map(file => 
//         <Image key={file.id} src={file.image} />)}
//     </SimpleGrid>
  )
}

export default GameScreenshots