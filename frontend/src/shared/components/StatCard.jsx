import { Box, Paper, Typography } from "@mui/material";
import { colors } from "../theme/colors";
import { shadows } from "../theme/shadows";

function StatCard({ icon, label, value, helper, color = colors.primary, children }) {
  return (
    <Paper elevation={0} sx={{ p: 3, border: `1px solid ${colors.outlineVariant}`, borderRadius: 2, boxShadow: shadows.soft }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {icon && (
          <Box sx={{ width: 48, height: 48, borderRadius: 1.5, bgcolor: `${color}18`, color, display: "grid", placeItems: "center" }}>
            <span className="material-symbols-outlined" style={{ fontSize: 30 }}>{icon}</span>
          </Box>
        )}
        <Box sx={{ minWidth: 0 }}>
          <Typography sx={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.04em", color: colors.onSurfaceVariant, textTransform: "uppercase" }}>{label}</Typography>
          <Typography sx={{ fontSize: 24, lineHeight: "32px", fontWeight: 700, color: colors.onSurface }}>{value}</Typography>
          {helper && <Typography sx={{ mt: 0.5, fontSize: 12, color }}>{helper}</Typography>}
        </Box>
      </Box>
      {children}
    </Paper>
  );
}

export default StatCard;
