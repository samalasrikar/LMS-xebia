import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { colors } from "../theme/colors";
import { shadows } from "../theme/shadows";

function DataTable({ columns, rows, title, toolbar, footer, emptyMessage = "No records found." }) {
  return (
    <Paper elevation={0} sx={{ border: `1px solid ${colors.outlineVariant}`, borderRadius: 2, boxShadow: shadows.soft, overflow: "hidden" }}>
      {(title || toolbar) && (
        <Box sx={{ px: 3, py: 2, bgcolor: colors.surfaceLow, borderBottom: `1px solid ${colors.outlineVariant}`, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2 }}>
          {title && <Typography variant="h4" color="primary">{title}</Typography>}
          {toolbar}
        </Box>
      )}
      <TableContainer sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: 760 }}>
          <TableHead>
            <TableRow sx={{ bgcolor: colors.surface }}>
              {columns.map((column) => (
                <TableCell key={column.key} align={column.align || "left"} sx={{ px: 3, py: 2, color: colors.onSurfaceVariant, fontSize: 12, fontWeight: 800, letterSpacing: "0.04em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                  {column.header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length === 0 ? (
              <TableRow><TableCell colSpan={columns.length}><Typography color="text.secondary" sx={{ py: 4, textAlign: "center" }}>{emptyMessage}</Typography></TableCell></TableRow>
            ) : rows.map((row) => (
              <TableRow key={row.id} hover sx={{ "&:last-child td": { borderBottom: 0 } }}>
                {columns.map((column) => (
                  <TableCell key={column.key} align={column.align || "left"} sx={{ px: 3, py: 1.75, color: colors.onSurface, fontSize: 14, verticalAlign: "middle" }}>
                    {column.render ? column.render(row) : row[column.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {footer && <Box sx={{ px: 3, py: 2, borderTop: `1px solid ${colors.outlineVariant}`, bgcolor: colors.surfaceLowest }}>{footer}</Box>}
    </Paper>
  );
}

export default DataTable;
