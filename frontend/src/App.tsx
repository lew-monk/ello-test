import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import BooksComponent from "./components/Books";
import Navbar from "./components/Navbar";
import { Stack } from "@mui/material";
import Banner from "./components/Banner";
import Recommender from "./components/Recommender";
import { BooksProvider } from "./state/useContext";

function App() {
  return (
    <BooksProvider>
      <ThemeProvider theme={theme}>
        <Stack
          sx={{
            width: "100vw",
            position: "relative",
            overflowX: "hidden",
          }}
          gap="12px"
          direction="column"
        >
          <Navbar />
          <Banner />
          <Recommender />
          <BooksComponent />
        </Stack>
      </ThemeProvider>
    </BooksProvider>
  );
}

export default App;
