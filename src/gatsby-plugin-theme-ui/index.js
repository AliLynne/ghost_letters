import { tosh } from "@theme-ui/presets"

export default {
  useColorSchemeMediaQuery: true,
  useBorderBox: true,
  ...tosh,
  colors: {
    text: "#000",
    background: "#f0f0f0",
    primary: "#000",
    secondary: "#3f3f3f",
    muted: "#e0e0e0",
    highlight: "#9f9f9f",
    gray: "#6c6c6c",
    accent: "#3f3f3f",
    modes: {
      dark: {
        text: "#fff",
        background: "#191919",
        primary: "#d2d2d2",
        secondary: "#b2b2b2",
        muted: "#191919",
        highlight: "#3c3c3c",
        gray: "#999",
        accent: "#e0e0e0",
      },
    },
  },
  fonts: {
    body: "Cutive Mono",
    heading: "Cutive Mono",
    monospace: "Cutive Mono",
  },
  buttons: {
    toggle: {
      color: "background",
      backgroundColor: "text",
      alignSelf: "flex-end",
    },
  },
  styles: {
    ...tosh.styles,
    root: {
      backgroundColor: "background",
      fontFamily: "Cutive Mono",
    },
    a: {
      textDecoration: "none",
      color: "text",
    },
    hr: {
      borderBottom: "8px solid",
    },
  },
}
