import Grid from "./components/Grid/Grid";
import Box from "./components/Box/Box";

function App() {
  return (
    <div className="App" style={{ margin: "14px" }}>
      <p>Aaapppppppppp</p>
      <Grid container spacing="lg">
        <Grid item cols={6}>
          <Box>box 1</Box>
        </Grid>
        <Grid item cols={6}>
          <Box>box 2</Box>
        </Grid>
        <Grid item cols={6}>
          <Box>box 3</Box>
        </Grid>
        <Grid item cols={6}>
          <Box>box 4</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
