import React, { FunctionComponent, ReactNode } from "react";
import styles from "./Grid.module.scss";
import cn from "classnames";

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = "sm" | "md" | "lg";
type JustifyContent = "flex-start" | "center" | "flex-end" | "space-between";

const Grid: FunctionComponent<{
  children: ReactNode;
  container?: boolean;
  item?: boolean;
  cols?: Cols;
  spacing?: Spacing;
  justifyContent?: JustifyContent;
}> = ({ children, container, item, cols, spacing, justifyContent }) => {
  const classNames = cn({
    [styles.Grid_container]: container,
    [styles.Grid_item]: item,
    [styles[`Grid_cols_${cols}`]]: cols,
    [styles[`Grid_spacing_${spacing}`]]: spacing,
    [styles[`Grid_justifyContent_${justifyContent}`]]: justifyContent,
  });
  return <div className={classNames}>{children}</div>;
};

export default Grid;
