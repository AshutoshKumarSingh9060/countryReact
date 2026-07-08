import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [Dark, setDark] = useState(JSON.parse(localStorage.getItem("theme")));

  const body = document.querySelector("body");
  if (Dark) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
  return (
    <ThemeContext.Provider value={[Dark, setDark]}>
      {children}
    </ThemeContext.Provider>
  );
}
