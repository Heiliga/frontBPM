import React from "react";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import {useTileButtonStyles} from "./tileButtonStyles";


const TileButton = ({
  buttonLabel = "Действие: Подробное Описание",
  IconComponent,
  onClick = () => {},
  href,
  visible = true,
  disabled = false,
  className,
}) => {
  const classes = useTileButtonStyles();
  return (
    visible &&
    <Button className={classNames({[className]: className, [classes.button]: true})} onClick={onClick} href={href} disabled={disabled}>
      <IconComponent className={classes.icon}/>
      <p className={classes.label}>
        {
          buttonLabel
        }
      </p>
    </Button>
  );
};

export default TileButton;
