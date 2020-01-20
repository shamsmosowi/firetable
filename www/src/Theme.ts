import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const HEADING_TEXT = "Europa, sans-serif";
const BODY_TEXT = '"Open Sans", sans-serif';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e22729",
    },
    secondary: {
      main: "#007bff",
    },
    text: {
      secondary: "rgba(0, 0, 0, 0.6)",
    },
  },
  typography: {
    fontFamily: BODY_TEXT,
    h3: {
      fontFamily: HEADING_TEXT,
      fontSize: 36,
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: "normal",
      letterSpacing: "normal",
    },
    h5: {
      fontFamily: HEADING_TEXT,
      fontSize: "1.5rem",
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: 1.25,
      letterSpacing: "normal",
    },
    h6: {
      fontFamily: HEADING_TEXT,
      fontSize: "1.125rem",
      fontWeight: "bold",
      letterSpacing: 0.2,
      textTransform: "uppercase",
    },
    overline: {
      fontFamily: HEADING_TEXT,
      fontSize: 13.4,
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: 1.2,
      letterSpacing: 2,
      color: "rgba(0, 0, 0, 0.6)",
    },
    subtitle1: {
      fontSize: 15.9,
      fontWeight: 300,
      lineHeight: 1.51,
      letterSpacing: 0.15,
    },
    body1: {
      lineHeight: 1.75,
      letterSpacing: 0.5,
    },
    subtitle2: {
      fontFamily: HEADING_TEXT,
      fontWeight: "bold",
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: 13.8,
      fontWeight: "normal",
      lineHeight: 1.45,
      letterSpacing: 0.25,
      color: "rgba(0, 0, 0, 0.6)",
    },
    button: {
      fontFamily: HEADING_TEXT,
      fontSize: "1rem",
      fontWeight: "bold",
      lineHeight: 1,
      letterSpacing: 0.75,
    },
    caption: {
      fontFamily: HEADING_TEXT,
      fontSize: "0.8125rem",
      fontWeight: "bold",
      letterSpacing: 0.4,
      lineHeight: 1.2,
    },
  },
  overrides: {
    MuiChip: {
      root: {
        borderRadius: 4,
      },
    },
    MuiCard: {
      root: {
        borderRadius: 8,
      },
    },
    MuiFormLabel: {
      root: {
        fontFamily: "Europa",
        fontSize: "1rem",
        fontWeight: "bold",
        letterSpacing: 0.4,
      },
    },
    MuiTooltip: {
      tooltip: {
        fontFamily: HEADING_TEXT,
        fontSize: "0.8125rem",
        fontWeight: "bold",
        letterSpacing: 0.4,
        lineHeight: 1.2,
      },
    },
    MuiTab: {
      root: { fontSize: "1rem !important" },
    },
  },
  props: {
    MuiRadio: { color: "primary" },
    MuiCheckbox: { color: "primary" },
    MuiCircularProgress: { size: 44 },
  },
});

export default Theme;
