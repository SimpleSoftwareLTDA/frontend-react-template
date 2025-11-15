import { Box, Container, Toolbar, Typography } from "@mui/material";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useTranslation } from "./contexts/LanguageContext";

function App() {
  const { translations } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
      }}
    >
      <Header />

      {/* Toolbar spacer to account for fixed header */}
      <Toolbar />

      <Box component="main" sx={{ flexGrow: 1, width: "100%" }}>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            {translations.home.title}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {translations.home.subtitle}
          </Typography>
          {/* Add more content here to test scrolling */}
          {Array.from({ length: 15 }).map((_, i) => (
            <Typography key={i} variant="body2" component="p" gutterBottom>
              {translations.home.scrollText}
            </Typography>
          ))}
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
