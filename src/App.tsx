import Grid from "./components/Grid/Grid";
import Box from "./components/Box/Box";

function App() {
  return (
    <div className="App">
      <p>Aaapppppppppp</p>
      <Grid container>
        <Grid item cols={1}>
          <Box>box 1</Box>
        </Grid>
        <Grid item cols={3}>
          <Box>box 2</Box>
        </Grid>
        <Grid item cols={5}>
          <Box>box 3</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
