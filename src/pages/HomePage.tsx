import { Grid, GridItem } from '@chakra-ui/layout';
import { Show } from '@chakra-ui/media-query';
import GameGrid from '../components/GameGrid';
import GenresList from '../components/GenresList';
import Testing from '../components/Testing';
import { useState } from 'react';
import { Genres } from '../hooks/useGenres';

const HomePage = () => {
    const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
    const [searchT, setSearchT] = useState<string>("");
    return (
        <>
          <Grid
            templateAreas={{
              base: `"main"`,
              lg: `"aside main"`,
            }}
          >
            <Show above="lg">
              <GridItem area="aside" paddingX={5}>
                <GenresList onSelectedGenre={(genre) => setSelectedGenre(genre)} />
              </GridItem>
            </Show>
            <GridItem area="main">
              <GameGrid selectedGenre={selectedGenre} searchText={searchT} />
              <Testing />
            </GridItem>
          </Grid>
        </>
      );
}

export default HomePage