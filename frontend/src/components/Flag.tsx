import { Box, Typography } from "@mui/material";
function Flag({ readingLevel }: { readingLevel: string }) {
  return (
    <Box
      sx={{
        width: "45px",
        height: "75px",
        boxSizing: "content-box",
        top: "0px",
        borderRadius: "2px",
        position: "absolute",
        right: 6,
        backgroundColor: "red",
        color: "white",
        fontSize: "11px",
        textAlign: "center",
        "::after": {
          content: '""',
          position: "absolute",
          right: 0,
          bottom: 0,
          width: 0,
          height: 0,
          backgroundColor: "red",
          borderBottom: "13px solid #fff",
          borderLeft: "22.5px solid transparent",
          borderRight: "22.5px solid transparent",
        },
      }}
    >
      <Typography variant="body1">Level</Typography>
      <Typography variant="body1" fontWeight="bold">
        {readingLevel}
      </Typography>
    </Box>
  );
}

export default Flag;
