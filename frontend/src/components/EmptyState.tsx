import { Box, Grid, Typography } from "@mui/material";
import NoDataIcon from "../assets/NoDataIcon";

function EmptyState() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <NoDataIcon />
      <Grid gap={4}>
        <Typography
          variant="h1"
          fontSize="24px"
          fontWeight="bold"
          align="center"
        >
          No result found
        </Typography>
        <Typography
          variant="body1"
          color="#4C4C4C"
          fontSize="14px"
          fontWeight="light"
        >
          We can’t find any item matching your search
        </Typography>
      </Grid>
    </Box>
  );
}

export default EmptyState;
