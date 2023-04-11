import React from "react";
import ICountryData from "../types/country.type";

export type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
  }

  export interface ProviderProps {
    children: React.ReactNode;
  }
  
  export const ThemeContext = React.createContext<ThemeContextType | null>(null);

  export const CountryContext = React.createContext<ICountryData | null>(null);
