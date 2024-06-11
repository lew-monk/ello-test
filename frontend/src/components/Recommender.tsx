import { Box, Button, Grid, Typography } from "@mui/material";
import PhantIcon from "../assets/PhantIcon";
import Flag from "./Flag";
import BookmarkIcon from "../assets/BookmarkIcon";
import Flower from "../assets/Flower";
import Circles from "../assets/Circles";
import theme from "../theme";

function Recommender() {
  return (
    <Box
      sx={{
        backgroundColor: "#4EA9A9",
        py: {
          sm: "64px",
          xs: "24px",
          md: "0px",
        },
        display: {
          sm: "none",
          xs: "none",
          md: "flex",
        },
      }}
      display="flex"
      width="100%"
      maxWidth="100vw"
      overflow="hidden"
      justifyContent="space-between"
      justifyItems="space-between"
      alignItems="center"
      position="relative"
    >
      <Box
        position="absolute"
        sx={{
          display: {
            xs: "none",
            lg: "block",
          },
        }}
        top={0}
      >
        <Flower />
      </Box>
      <Box
        sx={{
          display: {
            xs: "none",
            lg: "block",
          },
        }}
        position="absolute"
        bottom={0}
        right={0}
      >
        <Circles />
      </Box>
      <Box
        sx={{
          px: {
            sm: "0px",
            xs: "opx",
            md: "120px",
          },
        }}
        width="100%"
      >
        <Typography
          variant="h1"
          color="#335C6E"
          fontWeight="bold"
          paddingY="24px"
          sx={{
            py: {
              sm: "0px",
              xs: "opx",
              md: "8px",
            },
            mb: {
              sm: "0px",
              xs: "opx",
              md: "32px",
            },
            fontSize: {
              sm: "12px",
              xs: "12px",
              md: "24px",
            },
          }}
        >
          Phant's Recommended book of the week
        </Typography>
        <Box
          sx={{
            paddingX: "8px",
            width: {
              sm: "100px",
              xs: "130px",
              md: "260px",
            },
            height: {
              sm: "100px",
              xs: "124px",
              md: "254px",
            },
          }}
          position="relative"
          borderRadius="8px"
          alignItems="center"
          display="flex"
          gap="12px"
          flexGrow={1}
        >
          <Flag readingLevel="A" />
          <Box
            sx={{ background: "white", padding: "12px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="38px"
          >
            <Box
              component="img"
              src="assets/image3.webp"
              sx={{
                width: {
                  sm: "100px",
                  xs: "130px",
                  md: "260px",
                },
                height: {
                  sm: "100px",
                  xs: "124px",
                  md: "254px",
                },
              }}
              borderRadius="26px"
            />
          </Box>
          <Grid container gap="24px" mx="16px" paddingX="8px">
            <Grid item>
              <Typography
                variant="h1"
                fontSize="24px"
                color="white"
                fontWeight="bold"
                width="100%"
                sx={{
                  fontSize: {
                    sm: "16px",
                    xs: "16px",
                    md: "24px",
                  },
                  width: {
                    sm: "64px",
                    xs: "180px",
                    md: "100%",
                  },
                }}
              >
                Curious Princess and the Enchanted Garden
              </Typography>
              <Typography
                variant="body1"
                color="#4C4C4C"
                fontSize="14px"
                fontWeight="light"
              >
                Jon Jones
              </Typography>
            </Grid>
            <Grid
              item
              alignItems="center"
              justifySelf="center"
              sx={{
                display: {
                  sm: "none",
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <Button
                component="button"
                variant="contained"
                startIcon={<BookmarkIcon />}
                sx={{
                  color: "white",
                  width: "230px",
                  textTransform: "none",
                  backgroundColor: theme.palette.primary.contrastText,
                }}
              >
                Bookmark
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }} paddingRight="120px">
        <PhantIcon />
      </Box>
    </Box>
  );
}

export default Recommender;
