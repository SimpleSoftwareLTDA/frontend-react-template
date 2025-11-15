import { Box, Typography } from "@mui/material";
import { useTranslation } from "../contexts/LanguageContext";

export const Footer = () => {
  const { translations } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "background.default",
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 0.5,
          py: 3,
          px: { xs: 2, sm: 3 },
        }}
      >
        <Typography variant="body2" color="text.secondary" textAlign="center">
          {translations.footer.license} {translations.footer.author}
        </Typography>

        <Typography variant="body2" color="text.secondary" textAlign="center">
          {translations.footer.message}
        </Typography>
      </Box>
    </Box>
  );
};
