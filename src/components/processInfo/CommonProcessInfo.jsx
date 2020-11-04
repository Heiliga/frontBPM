import React, {useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import dateFnsFormat from "date-fns/format";
import {useProcessInfoStyles} from "./processInfoStyles";
import {useSnackbar} from "../../utils/snackbar";
import * as employeeApi from "../../api/employeeApi"
import {getLastNameWithInitialsFromFullName} from "../../utils/nameUtils";

const CommonProcessInfo = ({task, process, history}) => {
  const [fullName, setFullName] = useState(null);
  const proc = process || task.process;
  const variables = (task && task.variables) || (process && process.variables) || {};
  const {initiatorLogin} = variables;
  const {showError} = useSnackbar();

  /*useEffect(() => {
    if (initiatorLogin) {
      loadInitiatorFullName(initiatorLogin, setFullName, showError, history);
    }
  }, [history, initiatorLogin, showError]);*/

  const classes = useProcessInfoStyles();
  return (
    <span className={classes.processInfo}>
      <Typography>
        Дата создания: <strong>{dateFnsFormat(new Date(proc.startTime), "HH:mm dd.MM.yyyy")}</strong>
      </Typography>
    </span>
  );
};

export default CommonProcessInfo;
