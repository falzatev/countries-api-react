import React, { useContext } from "react";

import ThemeContext from "./contexts/ThemeContext";

export default function ThemeSetter() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <select value={theme} onChange={(e) => setTheme(e.currentTarget.value)}>
            {themeOptions.map((option, index) => (
                <option value={option.value} key={index}>
                    {option.value}
                </option>
            ))}
        </select>
    )
}

const themeOptions = [{ value: "light" }, { value: "dark" }];
