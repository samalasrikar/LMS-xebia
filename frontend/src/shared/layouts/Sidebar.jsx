import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import { colors } from "../theme/colors";

const navItems = [
  { label: "Dashboard", icon: "dashboard", to: "/" },
  { label: "Course Inventory", icon: "inventory_2", to: "/courses" },
  { label: "Curriculum Builder", icon: "account_tree", to: "/courses/create" },
  { label: "Users & Roles", icon: "group", to: "/users" },
  { label: "Analytics", icon: "analytics", to: "/analytics/courses" },
];

function Sidebar() {
  return (
    <Box component="aside" sx={{ position: "fixed", left: 0, top: 0, height: "100vh", width: 256, bgcolor: colors.primary, color: colors.onPrimary, display: "flex", flexDirection: "column", py: 3, zIndex: 1200, boxShadow: "0 4px 20px rgba(0,0,0,0.14)" }}>
      <Box sx={{ px: 3, mb: 5, display: "flex", gap: 1.5, alignItems: "center" }}>
        <Box sx={{ width: 40, height: 40, borderRadius: 1, bgcolor: colors.onPrimary, color: colors.primary, display: "grid", placeItems: "center" }}>
          <span className="material-symbols-outlined fill">school</span>
        </Box>
        <Box>
          <Typography sx={{ fontSize: 20, lineHeight: "24px", fontWeight: 900 }}>Xebia LMS</Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.62)", fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" }}>Enterprise Admin</Typography>
        </Box>
      </Box>
      <Box component="nav" sx={{ flex: 1 }}>
        {navItems.map((item) => (
          <Box
            component={NavLink}
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            style={{ textDecoration: "none" }}
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              px: 3,
              py: 1.5,
              color: "rgba(255,255,255,0.72)",
              fontSize: 12,
              fontWeight: 800,
              transition: "all 160ms ease",
              "&:hover": { bgcolor: "rgba(255,172,232,0.1)" },
              "&.active": { bgcolor: colors.primaryContainer, color: colors.onPrimaryContainer, borderLeft: `4px solid ${colors.ctaOrange}`, pl: 2.5 },
            }}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.label}
          </Box>
        ))}
      </Box>
      <Box sx={{ px: 3, py: 2 }}>
        <Button tone="cta" icon="add" fullWidth href="/courses/create">Create New Course</Button>
      </Box>
      <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.1)", pt: 2 }}>
        {[
          ["settings", "Settings"],
          ["logout", "Logout"],
        ].map(([icon, label]) => (
          <Box key={label} sx={{ display: "flex", alignItems: "center", gap: 1.5, px: 3, py: 1.25, color: "rgba(255,255,255,0.72)", fontSize: 12, fontWeight: 800 }}>
            <span className="material-symbols-outlined">{icon}</span>
            {label}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Sidebar;
