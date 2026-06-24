import MuiButton from "@mui/material/Button";
import { colors } from "../theme/colors";

const variantStyles = {
  primary: { bgcolor: colors.primary, color: colors.onPrimary, "&:hover": { bgcolor: colors.primaryContainer } },
  cta: { bgcolor: colors.ctaOrange, color: colors.onPrimary, "&:hover": { bgcolor: colors.ctaOrangeDark } },
  outline: { color: colors.primary, borderColor: colors.outlineVariant, "&:hover": { bgcolor: colors.surfaceLow, borderColor: colors.outline } },
  ghost: { color: colors.onSurfaceVariant, "&:hover": { bgcolor: colors.surfaceLow } },
};

function Button({ tone = "primary", icon, children, sx, variant, ...props }) {
  const muiVariant = variant || (tone === "outline" ? "outlined" : "contained");

  return (
    <MuiButton
      variant={muiVariant}
      startIcon={icon ? <span className="material-symbols-outlined">{icon}</span> : undefined}
      sx={{ px: 2, py: 1, ...variantStyles[tone], ...sx }}
      {...props}
    >
      {children}
    </MuiButton>
  );
}

export default Button;
