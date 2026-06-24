import { Box, CircularProgress, Typography } from "@mui/material";

function LoadingState({ label = "Loading..." }) {
  return (
    <Box sx={{ minHeight: 240, display: "grid", placeItems: "center", gap: 2 }}>
      <CircularProgress />
      <Typography color="text.secondary">{label}</Typography>
    </Box>
  );
}

export default LoadingState;
