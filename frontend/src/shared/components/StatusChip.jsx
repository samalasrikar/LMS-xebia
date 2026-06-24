import { Chip } from "@mui/material";
import { colors } from "../theme/colors";

const statusStyles = {
  active: { bgcolor: "rgba(5, 150, 105, 0.12)", color: colors.success, borderColor: "rgba(5, 150, 105, 0.25)" },
  completed: { bgcolor: "rgba(5, 150, 105, 0.12)", color: colors.success, borderColor: "rgba(5, 150, 105, 0.25)" },
  published: { bgcolor: "rgba(5, 150, 105, 0.12)", color: colors.success, borderColor: "rgba(5, 150, 105, 0.25)" },
  draft: { bgcolor: colors.surfaceHigh, color: colors.onSurfaceVariant, borderColor: colors.outlineVariant },
  pending: { bgcolor: "rgba(81, 67, 76, 0.1)", color: colors.onSurfaceVariant, borderColor: colors.outlineVariant },
  inactive: { bgcolor: "rgba(81, 67, 76, 0.1)", color: colors.onSurfaceVariant, borderColor: colors.outlineVariant },
  review: { bgcolor: "rgba(255, 98, 0, 0.12)", color: colors.ctaOrange, borderColor: "rgba(255, 98, 0, 0.22)" },
  risk: { bgcolor: colors.errorContainer, color: colors.onErrorContainer, borderColor: colors.errorContainer },
  progress: { bgcolor: "rgba(108, 29, 95, 0.1)", color: colors.primaryContainer, borderColor: "rgba(108, 29, 95, 0.18)" },
};

function StatusChip({ label, status = label, sx }) {
  const key = String(status).toLowerCase().replace(/\s+/g, "");

  return (
    <Chip
      label={label}
      variant="outlined"
      size="small"
      sx={{
        height: 24,
        borderRadius: 12,
        fontSize: 11,
        fontWeight: 800,
        letterSpacing: 0,
        textTransform: "uppercase",
        ...statusStyles[key],
        ...sx,
      }}
    />
  );
}

export default StatusChip;
