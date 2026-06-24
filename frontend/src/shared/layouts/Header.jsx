import { Box, IconButton, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar";
import { colors } from "../theme/colors";

function Header({ searchPlaceholder = "Global search..." }) {
  return (
    <Box component="header" sx={{ position: "sticky", top: 0, zIndex: 1000, height: 64, bgcolor: colors.surfaceLowest, borderBottom: `1px solid ${colors.outlineVariant}`, display: "flex", alignItems: "center", justifyContent: "space-between", px: 4, gap: 2 }}>
      <SearchBar placeholder={searchPlaceholder} sx={{ maxWidth: 420, display: { xs: "none", md: "block" } }} />
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, ml: "auto" }}>
        <IconButton><span className="material-symbols-outlined">notifications</span></IconButton>
        <IconButton><span className="material-symbols-outlined">help_outline</span></IconButton>
        <Box sx={{ width: 1, height: 32, bgcolor: colors.outlineVariant }} />
        <Box sx={{ textAlign: "right", display: { xs: "none", sm: "block" } }}>
          <Typography sx={{ fontSize: 14, fontWeight: 800 }}>Alex Sterling</Typography>
          <Typography sx={{ fontSize: 11, color: colors.onSurfaceVariant, fontWeight: 700 }}>System Administrator</Typography>
        </Box>
        <Box sx={{ width: 40, height: 40, borderRadius: "50%", bgcolor: colors.primary, color: colors.onPrimary, display: "grid", placeItems: "center", fontWeight: 900 }}>AD</Box>
      </Box>
    </Box>
  );
}

export default Header;
