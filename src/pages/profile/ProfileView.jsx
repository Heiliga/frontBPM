import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Grid from "@material-ui/core/Grid";
import hrJediLogo from "../../images/EV.jpg";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import {useProfileStyles} from "./profileStyles";
import {CircularProgress} from "@material-ui/core";
import {useFormik} from "formik";
import {formikValidate} from "../../forms";
import {required} from "../../forms/formik/formikValidationRules";
import {loadAvatar} from "../../api/employeeApi";
import {getCommonJsonRequestProps} from "../../common";

const validate = formikValidate({
  email: [required()],
});

const ProfileView = ({currentUser, onSave, avatar}) => {
  const preview = !currentUser;
  const classes = useProfileStyles();
  const {values, errors, handleSubmit, handleChange, setErrors} = useFormik({
    initialValues: {
      email: currentUser ? currentUser.email : "",
    },
    onSubmit: (values) => {
      return onSave(values)
    },
    validate,
    validateOnChange: false,
    validateOnBlur: true,
    enableReinitialize: true,
  });

  const file_input = document.createElement('input');
  async function selectFile() {
      file_input.addEventListener("change", uploadFile, false);
      file_input.type = 'file';
      file_input.click();
  };

  async function uploadFile() {
      const dataArray = new FormData();
      dataArray.append('file', file_input.files[0]);
      fetch(`/hr-rest/employees/current/avatar`, {
        method: 'POST',
        body: dataArray,
        ...getCommonJsonRequestProps(),
       }).then(console.log("Картинка передена"))
         .then(loadAvatar(currentUser))
         .catch(error => console.error(error))

  };

  return (
    preview ?
      <CircularProgress/>
      :
      <form onSubmit={handleSubmit} onChange={() => Object.keys(errors).length !== 0 && setErrors({})}>
        <Card>
          <CardContent>
            <Grid container justify="center">
              <Grid item>
                <img onClick={selectFile} alt="complex" className={classes.imageInput} src={avatar ? avatar : hrJediLogo}/>
              </Grid>
              <Grid item sm>
                <Typography className={classes.pageTitle} variant="h3">
                  {currentUser.fullName}
                </Typography>
                <CardContent>
                  <TextField
                    id="email"
                    label="Почтовый ящик"
                    placeholder="Почтовый ящик"
                    type="text"
                    className={classes.gridContainer}
                    error={errors.email}
                    helperText={errors.email}
                    value={values.email}
                    onChange={handleChange}
                  />
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Сохранить
                  </Button>
                </CardActions>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </form>
  );
};

export default ProfileView;
