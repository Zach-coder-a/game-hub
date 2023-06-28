import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Games from "./Components/Games";

const App = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>Aside</GridItem>
        </Show>
        <GridItem area={"main"}>
          <Games />
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
