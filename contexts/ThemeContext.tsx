'use client'

import { createContext, useContext, useState, useMemo, ReactNode } from "react"
import { THEME_COLORS } from "./constant.color";

const themeContext = createContext();

export const useTheme = () => useContext(themeContext);

interface ThemeContextProps {
  children: ReactNode;

}
    
const ThemeContext = ({ children  }: ThemeContextProps) => {
    const ctheme = 'dark'
    const [theme, setTheme] = useState(ctheme);

    const activeTheme = useMemo(() => {
        return THEME_COLORS.find((t) => t.themeName === theme) || THEME_COLORS;
    }, [theme]);


    const value = {
        theme: activeTheme,
        setTheme: setTheme,
        themeName: theme,
    };

    return (
        <themeContext.Provider value={value}>{children}</themeContext.Provider>
    );
}

export default ThemeContext;

