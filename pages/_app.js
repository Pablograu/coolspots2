import "../styles/globals.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Layout from '../components/Layout'


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Avenir",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },

  palette: {
    primary: {
      light: "#5fb8ff",
      main: "#373B44",
      dark: "#0478dd",
      contrastText: "#f9f9f9",
    },
    secondary: {
      light: "#6646ff",
      main: "#001aff",
      dark: "#0000f0",
      contrastText: "#fff",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
