import { InputAdornment, TextField } from "@mui/material";
import { colors } from "../theme/colors";

function SearchBar({ placeholder = "Search...", sx, ...props }) {
  return (
    <TextField
      size="small"
      placeholder={placeholder}
      InputProps={{ startAdornment: <InputAdornment position="start"><span className="material-symbols-outlined">search</span></InputAdornment> }}
      sx={{
        minWidth: { xs: "100%", sm: 320 },
        "& .MuiOutlinedInput-root": { bgcolor: colors.surfaceLow, borderRadius: 2 },
        ...sx,
      }}
      {...props}
    />
  );
}

export default SearchBar;
