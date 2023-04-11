import React, { createContext, useState, useContext } from "react";
import ICountryData from "../types/country.type";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const CountryContext = createContext<ICountryData | null>(null);

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface CountryProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
      <div data-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const CountryProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [country, setCountry] = useState({});

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return themeContext;
};

export const useCountry = () => {
  const countryContext = useContext(CountryContext);
  if(!countryContext) {
    throw new Error("useCountry must be used within a CountryProvider");
  }
  return countryContext;
}
