import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Grid from "./Grid";
import Box from "../Box/Box";
export default {
  title: "Grid",
  component: Grid,
} as ComponentMeta<any>;

export const Basic: ComponentStory<any> = (args) => (
  <div style={{ position: "relative" }}>
    <Grid
      container
      spacing="lg"
      justifyContent="space-between"
      alignItems="center"
      style={{ height: "100%" }}
      {...args}
    >
      <Grid item cols={1}>
        <Box>box 1</Box>
      </Grid>
      <Grid item cols={1}>
        <Box>box 2</Box>
      </Grid>
      <Grid item cols={2}>
        <Box>box 3</Box>
      </Grid>
      <Grid item cols={1}>
        <Box>box 4</Box>
      </Grid>
    </Grid>
  </div>
);
