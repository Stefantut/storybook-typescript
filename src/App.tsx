import React from "react";
import Grid from "./components/Grid/Grid";
import Box from "./components/Box/Box";

function App() {
  return (
    <div className="App">
      <p>Aaapppppppppp</p>
      <Grid container>
        <Grid item>
          <Box>box 1</Box>
        </Grid>
        <Grid item>
          <Box>box 2</Box>
        </Grid>
        <Grid item>
          <Box>box 3</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
