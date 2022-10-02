import React, { FunctionComponent } from "react";
import styles from "./GridRuler.module.scss";
import cn from "classnames";

type Spacing = "sm" | "md" | "lg";

const GridRuler: FunctionComponent<{ spacing?: Spacing }> = ({ spacing }) => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const classNames = cn(styles.GridRuler, {
    [styles[`GridRuler_spacing_${spacing}`]]: spacing,
  });

  return (
    <div className={classNames}>
      {array.map((number) => (
        <div className={styles.GridRuler_item} key={number} />
      ))}
    </div>
  );
};

export default GridRuler;
