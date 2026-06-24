import { Box, Typography } from "@mui/material";
import Breadcrumbs from "../layouts/Breadcrumbs";

function PageHeader({ breadcrumbs, title, subtitle, actions }) {
  return (
    <Box sx={{ display: "flex", alignItems: { xs: "flex-start", md: "flex-end" }, justifyContent: "space-between", gap: 2, flexDirection: { xs: "column", md: "row" } }}>
      <Box>
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <Typography variant="h2" color="primary" sx={{ mb: subtitle ? 0.5 : 0 }}>{title}</Typography>
        {subtitle && <Typography color="text.secondary">{subtitle}</Typography>}
      </Box>
      {actions && <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>{actions}</Box>}
    </Box>
  );
}

export default PageHeader;
