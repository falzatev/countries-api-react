import React from "react";

export const initialThemeState = {
    theme: "light",
    setTheme: () => {}
};

const ThemeContext = React.createContext(initialThemeState);

export default ThemeContext;
