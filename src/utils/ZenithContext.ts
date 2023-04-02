import { createContext } from "react"

export type ZenithContextType = {
  colors: {
    bg_primary: string
    bg_secondary: string
    text_primary: string
    white: string
  }
  breakpoints: {
    xs: string
    phone: string
    tablet: string
    laptop: string
  }
  status: {
    success: { bg: string; font: string }
    failure: { bg: string; font: string }
    default: { bg: string; font: string }
    new: { bg: string; font: string }
  }
}

export const ZenithContext = createContext<ZenithContextType>({
  colors: {
    bg_primary: "#141821",
    bg_secondary: "#222938",
    text_primary: "#fff",
    white: "#fff",
  },

  breakpoints: {
    xs: "screen and (max-width: 640px)",
    phone: "screen and (max-width: 768px)",
    tablet: "screen and (max-width: 1024px)",
    laptop: "screen and (max-width: 1280px)",
  },
  status: {
    success: { bg: "rgba(154, 230, 180, 0.36)", font: "#9AE6B4" },
    failure: { bg: "rgba(254, 178, 178, 0.36)", font: "#FEB2B2" },
    default: { bg: "rgba(226, 232, 240, 0.36)", font: "#E2E8F0" },
    new: { bg: "rgba(214, 188, 250, 0.46)", font: "#D6BCFA" },
  },
})
