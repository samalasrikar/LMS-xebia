import { Box, Checkbox, Dialog, DialogContent, Paper, Typography } from "@mui/material";
import { useState } from "react";
import Button from "../../../shared/components/Button";
import PageHeader from "../../../shared/components/PageHeader";
import StatusChip from "../../../shared/components/StatusChip";
import PageContainer from "../../../shared/layouts/PageContainer";
import { colors } from "../../../shared/theme/colors";
import { shadows } from "../../../shared/theme/shadows";

function SummaryCard({ icon, title, children }) {
  return <Paper elevation={0} sx={{ border: `1px solid ${colors.outlineVariant}`, borderRadius: 2, boxShadow: shadows.soft, overflow: "hidden" }}><Box sx={{ px: 3, py: 2, bgcolor: colors.surfaceLow, borderBottom: `1px solid ${colors.outlineVariant}`, display: "flex", justifyContent: "space-between" }}><Typography variant="h4" sx={{ display: "flex", gap: 1 }}><span className="material-symbols-outlined" style={{ color: colors.primary }}>{icon}</span>{title}</Typography><Button tone="ghost" icon="edit">Edit</Button></Box><Box sx={{ p: 3 }}>{children}</Box></Paper>;
}

function ReviewPublishPage() {
  const [publishing, setPublishing] = useState(false);
  const [open, setOpen] = useState(false);
  const publish = () => { setPublishing(true); window.setTimeout(() => { setOpen(true); setPublishing(false); }, 800); };

  return (
    <PageContainer sx={{ pb: 12 }}>
      <Box sx={{ display: "grid", gap: 3 }}>
        <PageHeader breadcrumbs={[{ label: "Courses", to: "/courses" }, { label: "Review" }]} title="Review & Publish Course" />
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, bgcolor: colors.surfaceLowest, border: `1px solid ${colors.outlineVariant}`, borderRadius: 2, p: 3 }}>
          {["Basic Info", "Settings", "Curriculum", "Review"].map((step, index) => <Box key={step} sx={{ display: "flex", alignItems: "center", gap: 2 }}><Box sx={{ textAlign: "center" }}><Box sx={{ width: 40, height: 40, borderRadius: "50%", border: `2px solid ${index < 3 ? colors.success : colors.primary}`, bgcolor: index < 3 ? colors.successBg : colors.surfaceLowest, color: index < 3 ? colors.success : colors.primary, display: "grid", placeItems: "center", fontWeight: 900 }}>{index < 3 ? <span className="material-symbols-outlined">check</span> : 4}</Box><Typography sx={{ mt: 1, fontSize: 12, fontWeight: 800 }}>{step}</Typography></Box>{index < 3 && <Box sx={{ width: 84, height: 2, bgcolor: index < 2 ? colors.success : colors.primary }} />}</Box>)}
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr" }, gap: 3 }}>
          <Box sx={{ display: "grid", gap: 3 }}>
            <SummaryCard icon="description" title="Course Summary"><Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3 }}><Box><Typography sx={{ fontSize: 12, fontWeight: 800, color: colors.onSurfaceVariant }}>TITLE</Typography><Typography sx={{ fontWeight: 800 }}>Advanced Cloud Architecture: Scalability & Resilience</Typography></Box><Box><Typography sx={{ fontSize: 12, fontWeight: 800, color: colors.onSurfaceVariant }}>COURSE CODE</Typography><Typography>XEB-CLOUD-402</Typography></Box><Box><Typography sx={{ fontSize: 12, fontWeight: 800, color: colors.onSurfaceVariant }}>CATEGORY</Typography><StatusChip label="Technology" status="progress" /></Box></Box></SummaryCard>
            <SummaryCard icon="settings" title="Settings Summary"><Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3 }}><Typography><strong>Difficulty</strong><br />Advanced</Typography><Typography><strong>Language</strong><br />English (US)</Typography><Typography><strong>Estimated Duration</strong><br />24 Hours</Typography></Box></SummaryCard>
            <SummaryCard icon="menu_book" title="Curriculum Summary"><Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2, mb: 3 }}>{[["06", "Sections"], ["32", "Lessons"], ["12", "Quizzes"], ["04", "Assignments"]].map(([value, label]) => <Box key={label} sx={{ p: 2, bgcolor: colors.surface, borderRadius: 1, textAlign: "center" }}><Typography sx={{ fontSize: 32, fontWeight: 900, color: colors.primary }}>{value}</Typography><Typography sx={{ fontSize: 12, fontWeight: 800, color: colors.onSurfaceVariant }}>{label}</Typography></Box>)}</Box>{["Introduction to Microservices Architecture", "Load Balancing and Traffic Management"].map((item, index) => <Box key={item} sx={{ p: 1.5, border: `1px solid ${colors.outlineVariant}`, borderRadius: 1, mb: 1, display: "flex", justifyContent: "space-between" }}><Typography><strong>{String(index + 1).padStart(2, "0")}</strong> {item}</Typography><Typography color="text.secondary">{index === 0 ? 4 : 8} Lessons</Typography></Box>)}</SummaryCard>
          </Box>
          <Box sx={{ display: "grid", gap: 3, alignSelf: "start" }}>
            <Paper elevation={0} sx={{ border: `1px solid ${colors.outlineVariant}`, borderRadius: 2, boxShadow: shadows.soft, overflow: "hidden" }}><Box sx={{ height: 190, bgcolor: colors.primary, background: `linear-gradient(135deg, ${colors.primary}, ${colors.ctaOrange})` }} /><Box sx={{ p: 3 }}><Typography variant="h4">Cloud Masterclass Preview</Typography><Typography color="text.secondary">Thumbnail displayed to students on the marketplace and dashboard.</Typography></Box></Paper>
            <SummaryCard icon="fact_check" title="Validation Status">{[["check_circle", colors.success, "Course Identity", "Title, Code, and Categories confirmed."], ["check_circle", colors.success, "Asset Compliance", "All video and PDF resources validated."], ["error", colors.error, "Missing Metadata", "SEO tags for Search Results are missing."]].map(([icon, color, title, text]) => <Box key={title} sx={{ display: "flex", gap: 1.5, mb: 2 }}><span className="material-symbols-outlined" style={{ color }}>{icon}</span><Box><Typography sx={{ fontWeight: 800, color: title.includes("Missing") ? colors.error : colors.onSurface }}>{title}</Typography><Typography sx={{ fontSize: 12, color: colors.onSurfaceVariant }}>{text}</Typography></Box></Box>)}</SummaryCard>
            <SummaryCard icon="rocket_launch" title="Publication Ready?">{["Public visibility enabled", "Notify registered organizations", "Send mobile app notifications"].map((label) => <Box key={label} sx={{ display: "flex", alignItems: "center" }}><Checkbox /> <Typography sx={{ fontWeight: 800 }}>{label}</Typography></Box>)}</SummaryCard>
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: "fixed", bottom: 0, left: 256, right: 0, height: 80, bgcolor: colors.surfaceLowest, borderTop: `1px solid ${colors.outlineVariant}`, display: "flex", justifyContent: "space-between", alignItems: "center", px: 4, zIndex: 1000 }}><Button tone="outline" icon="arrow_back_ios">Back to Curriculum</Button><Box sx={{ display: "flex", gap: 2 }}><Button tone="primary">Save Draft</Button><Button tone="cta" icon={publishing ? "autorenew" : "send"} onClick={publish}>{publishing ? "Processing..." : "Publish Course"}</Button></Box></Box>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xs" fullWidth><DialogContent sx={{ p: 5, textAlign: "center" }}><Box sx={{ width: 80, height: 80, borderRadius: "50%", bgcolor: colors.successBg, color: colors.success, display: "grid", placeItems: "center", mx: "auto", mb: 2 }}><span className="material-symbols-outlined" style={{ fontSize: 42 }}>verified</span></Box><Typography variant="h2">Success!</Typography><Typography color="text.secondary" sx={{ my: 2 }}>Advanced Cloud Architecture has been successfully published and is now live for all enterprise users.</Typography><Button tone="primary" fullWidth onClick={() => setOpen(false)}>Go to Dashboard</Button></DialogContent></Dialog>
    </PageContainer>
  );
}

export default ReviewPublishPage;
