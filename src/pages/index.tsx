import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { Dashboard } from "@/comopnents/dashboard/dashboard";
import theme from "@/styles/muiTheme";
import { Box, CssBaseline } from "@mui/material";
import NavBar from "@/comopnents/navbar/navBar";

export default function Home() {
  return (
    <>
      <Head>
        <script
          src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"
          type="text/javascript"
          async
        ></script>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ThemeProvider theme={theme}>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <NavBar />
          </Box>
          <Dashboard />
        </ThemeProvider>
      </main>
    </>
  );
}
