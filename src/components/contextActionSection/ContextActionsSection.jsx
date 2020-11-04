import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {useContextActionsSectionStyles} from "./contextActionsSectionStyles";
import {previewfy} from "../../common";


const ContextActionsSection = ({children, preview = false, visible = true, ...otherProps}) => {
  const classes = useContextActionsSectionStyles();
  return (
    visible && !!children && (!preview ? (
          <>
            <Typography variant="h5" className={previewfy(classes, classes.pageSubTitle, preview)}>
              Действия
            </Typography>
            <Grid className={classes.actionsGridContainer}>
              <Grid item>
                {
                  React.Children.map(children, child => React.cloneElement(child, {className: previewfy(classes, null, preview), ...otherProps}))
                }
              </Grid>
            </Grid>
          </>
        )
        :
        <DummyContextActionsSection classes={classes}/>
    )
  );
};

const DummyContextActionsSection = ({classes}) => (
  <>
    <div className={previewfy(classes, classes.previewActionsLabel, true)}/>
    <div className={classes.previewTileButtonsSection}>
      <div className={previewfy(classes, classes.previewTileButton, true)}/>
      <div className={previewfy(classes, classes.previewTileButton, true)}/>
      <div className={previewfy(classes, classes.previewTileButton, true)}/>
    </div>
  </>
);

export default ContextActionsSection;
