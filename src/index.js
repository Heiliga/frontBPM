/* eslint-disable react/jsx-filename-extension */
import "react-app-polyfill/ie9";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {StylesProvider, ThemeProvider} from "@material-ui/styles";
import {create} from "jss";
import preset from "jss-preset-default";
import App from "./app/App";
import theme from "./styles/theme";
import {SnackbarProvider} from "notistack";
import * as serviceWorker from "./serviceWorker";
import {snackbarProviderProps} from "./utils/snackbar";
import {AppContextProvider} from "./AppContext";
import format from "date-fns/format";
import DateFnsUtils from "@date-io/date-fns";
import {USER_LOCALE} from "./common";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";

const jss = create(preset());


DateFnsUtils.prototype.getDatePickerHeaderText = date => format(date, "EEE, d MMMM", {locale: USER_LOCALE});
DateFnsUtils.prototype.getMonthText = date => format(date, "LLLL", {locale: USER_LOCALE});


const Root = (
  <BrowserRouter basename="/">
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider {...snackbarProviderProps}>
          <AppContextProvider>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={USER_LOCALE}>
            <App/>
            </MuiPickersUtilsProvider>
          </AppContextProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </StylesProvider>
  </BrowserRouter>
);

ReactDOM.render(Root, document.getElementById("root"));

serviceWorker.register();
