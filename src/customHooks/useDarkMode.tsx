import { useEffect, useState } from "react"

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light")

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode)
    setTheme(mode)
  }

  const themeToggler: Function = () => {
    theme === "light" ? setMode("dark") : setMode("light")
  }

  useEffect(() => {
    let localTheme = window.localStorage.getItem("theme")
    // Defaults to dark mode
    localTheme = localTheme === null ? "dark" : localTheme
    localTheme && setTheme(localTheme)
  }, [])
  return [theme, themeToggler]
}
