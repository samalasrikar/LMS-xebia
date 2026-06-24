import { Box } from "@mui/material";

function PageContainer({ children, maxWidth = "1600px", sx }) {
  return (
    <Box component="main" sx={{ flex: 1, p: 4, maxWidth, width: "100%", mx: "auto", ...sx }}>
      {children}
    </Box>
  );
}

export default PageContainer;
