import React from "react";
import { changeTheme } from "../actions/themeAction";
import Switch from "@mui/material/Switch";

const Theme = ({ disp, theme }) => {
  return (
    <>
      <h1
        style={
          theme === "dark"
            ? { color: "rgba(255, 255, 255, 0.7)" }
            : { color: "rgba(0, 0, 0, 0.6)" }
        }
      >
        Click here to change the the theme mode
      </h1>
      <Switch
        onClick={() => {
          disp(changeTheme());
        }}
        defaultChecked
      />
    </>
  );
};

export default Theme;
