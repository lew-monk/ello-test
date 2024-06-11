import { Box, Grid, Typography } from "@mui/material";
import NoBooks from "../assets/NoBooks";

function EmptyStateSelections() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <NoBooks />
      <Grid gap={4}>
        <Typography
          variant="h1"
          fontSize="24px"
          fontWeight="bold"
          align="center"
        >
          No Books Added
        </Typography>
        <Typography
          variant="body1"
          color="#4C4C4C"
          fontSize="14px"
          fontWeight="light"
        >
          We can’t find any selections you have made in the past
        </Typography>
      </Grid>
    </Box>
  );
}

export default EmptyStateSelections;
