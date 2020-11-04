import {getCommonJsonRequestProps, throwHttpErrors} from "../common";

export const getAllUsers = (history) =>
  fetch(`/hr-rest/employees`, {
    method: "GET",
    ...getCommonJsonRequestProps(),
  })
    .then(response => throwHttpErrors(response, history))
    .then(response => response.json())
    .then(users => users || []);

export const updateEmail = (history, email) =>
  fetch(`/hr-rest/employees/current/update-email`, {
    method: "POST",
    ...getCommonJsonRequestProps(),
    body: email,
  })
    .then(response => throwHttpErrors(response, history))
    .then(response => response.text());

export const findUser = (history, login) =>
  fetch(`/hr-rest/employees/${login}`, {
    method: "GET",
    ...getCommonJsonRequestProps(),
  })
    .then(response => throwHttpErrors(response, history))
    .then(response => response.json());

export const getEmployeeFullNameByLogin = (employeeLogin, history) =>
  fetch(`/hr-rest/employees/${employeeLogin}/fullName`, {
    method: "GET",
    ...getCommonJsonRequestProps(),
  })
    .then(response => throwHttpErrors(response, history))
    .then(response => response.json());

export const loadAvatar = (history) =>
  fetch(`/hr-rest/employees/current/avatar`, {
    method: "GET",
    ...getCommonJsonRequestProps(),
  })
    .then(response => throwHttpErrors(response, history))
    .then(response => response.blob())
    .then(image => image.size > 0 ? window.URL.createObjectURL(image) : null)
    .then(image => image.size > 0 ? console.log(window.URL.createObjectURL(image)) : console.log("не передано"));

