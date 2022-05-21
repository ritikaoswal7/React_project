import React, { useState } from "react";

const setAuthentication = () => {
  localStorage.setItem("auth", true);
};

const checkAuthentication = () => {
  const value = localStorage.getItem("auth");
  return value;
};
const setAuthenticationDefault = () => {
  localStorage.setItem("auth", false);
};

export { setAuthentication, checkAuthentication, setAuthenticationDefault };
