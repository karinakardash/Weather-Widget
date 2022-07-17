import { useState } from "react";
import { Theme, ThemeContext } from "../context/ThemeContext";
import { changeCssRootVariables } from "../model/ChangeCSSRootVariables";
import { storage } from "../model/Storage";

type ThemeProviderProps = {
  children: React.ReactNode;
};
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  ...props
}) => {
  const [theme, setTheme] = useState<Theme>(
    storage.getItem("theme") || Theme.LIGHT
  );
  changeCssRootVariables(theme);
  function changeTheme(theme: Theme) {
    storage.setItem("theme", theme);
    setTheme(theme);
    changeCssRootVariables(theme);
  }
  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};
