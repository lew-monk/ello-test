import { Button, Box, Typography } from "@mui/material";
import theme from "../theme";

function Banner() {
  return (
    <Box
      gap="24px"
      paddingY="64px"
      justifyContent="center"
      justifyItems="center"
      display="grid"
      width="100%"
    >
      <Typography
        textAlign="center"
        variant="h1"
        fontWeight="bold"
        fontSize="46px"
      >
        Empower Young Minds with{" "}
        <Typography color={theme.palette.primary.main} variant="span">
          Ello
        </Typography>
      </Typography>
      <Typography
        variant="body1"
        color="#828282"
        textAlign="center"
        fontSize="16px"
      >
        Give your students the gift of reading by easily assigning books and
        track their reading progress.
      </Typography>
      <Button
        sx={{
          backgroundColor: "#4EA9A9",
          color: "#fff",
          width: "120px",
        }}
      >
        My Account
      </Button>
    </Box>
  );
}

export default Banner;
