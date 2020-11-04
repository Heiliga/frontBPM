import React from "react";
import {useSimplePageStyles} from "../../styles/simplePageStyles";
import {CircularProgress} from "@material-ui/core";
import Helmet from "react-helmet";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ContextActionsSection from "../../components/contextActionSection/ContextActionsSection";
import {ALL} from "../../security/Authorities";
import AuthWrapper from "../../security/AuthWrapper";
import {StartVacationApprovalProcessTileButton} from "./actions/StartVacationApprovalProcessTileButton";

const VacationsView = ({preview = false, history}) => {
  const classes = useSimplePageStyles();
  return preview ?
    <CircularProgress/>
    : (<div>
      <Helmet title="Формирование отпусков"/>
      <Card>
        <CardContent>
          <Typography className={classes.pageTitle} variant="h3">Формирование отпускных дней</Typography>
          <ContextActionsSection history={history}>
            <AuthWrapper authorities={ALL}>
              <StartVacationApprovalProcessTileButton/>
            </AuthWrapper>
          </ContextActionsSection>
        </CardContent>
      </Card>
    </div>);
};

export default VacationsView;
