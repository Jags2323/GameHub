import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import Testing from "./components/Testing";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  platform: Platform | null;
  searchText: string;
}
function App() {
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
        <GridItem area="nav">
          <NavBar onSearch={(searchText) => setSearchT(searchText)} />
        </GridItem>
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

export default App;
