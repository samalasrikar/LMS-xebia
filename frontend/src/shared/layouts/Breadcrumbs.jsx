import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { colors } from "../theme/colors";

function Breadcrumbs({ items = [] }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, mb: 1, color: colors.onSurfaceVariant, fontSize: 12, fontWeight: 800 }}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <Box key={`${item.label}-${index}`} sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
            {item.to && !isLast ? (
              <Link component={RouterLink} to={item.to} underline="none" sx={{ color: colors.onSurfaceVariant, "&:hover": { color: colors.primary } }}>{item.label}</Link>
            ) : (
              <Typography sx={{ color: isLast ? colors.primary : colors.onSurfaceVariant, fontSize: 12, fontWeight: 800 }}>{item.label}</Typography>
            )}
            {!isLast && <span className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>}
          </Box>
        );
      })}
    </Box>
  );
}

export default Breadcrumbs;
