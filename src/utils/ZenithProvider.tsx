import React, { ReactNode } from "react"
import { ZenithContext, ZenithContextType } from "./"
import { ThemeProvider } from "styled-components"

const ZenithProvider = ({
  children,
  value = {
    colors: {
      bg_primary: "#141821",
      bg_secondary: "#222938",
      text_primary: "#fff",
      white: "#fff",
    },

    breakpoints: {
      xs: " screen and (max-width: 400px)",
      phone: "screen and (max-width: 600px)",
      tablet: " screen and (max-width: 900px)",
      laptop: " screen and (max-width: 1280px)",
    },
    status: {
      success: { bg: "rgba(154, 230, 180, 0.36)", font: "#9AE6B4" },
      failure: { bg: "rgba(254, 178, 178, 0.36)", font: "#FEB2B2" },
      default: { bg: "rgba(226, 232, 240, 0.36)", font: "#E2E8F0" },
      new: { bg: "rgba(214, 188, 250, 0.46)", font: "#D6BCFA" },
    },
  },
}: {
  children: ReactNode
  value?: ZenithContextType
}) => {
  return (
    <ZenithContext.Provider value={value}>
      <ThemeProvider theme={{}}>{children}</ThemeProvider>
    </ZenithContext.Provider>
  )
}

export { ZenithProvider }
