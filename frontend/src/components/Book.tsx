import { Box, Button, Grid, Typography } from "@mui/material";
import { Book } from "../data/graphModels";
import BookmarkIcon from "../assets/BookmarkIcon";
import Flag from "./Flag";
import { useBooks } from "../state/useContext";
import RemoveIcon from "../assets/RemoveIcon";

function BookComponent({ title, author, coverPhotoURL, readingLevel }: Book) {
  const { addBook, addedBooks, removeBook } = useBooks();

  const checkIfAdded = (): boolean => {
    return addedBooks.filter((book) => book.title === title).length > 0
      ? true
      : false;
  };
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      justifyContent="center"
      alignItems={"center"}
    >
      <Box
        sx={{
          background: "#FFE6DC",
          padding: "8px",
          width: {
            sm: "260px",
            xs: "90%",
          },
        }}
        width="260px"
        height="390px"
        position="relative"
        borderRadius="8px"
      >
        <Flag readingLevel={readingLevel} />
        <Box
          sx={{ background: "white", padding: "12px" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="38px"
        >
          <Box
            component="img"
            src={coverPhotoURL}
            width={240}
            height={230}
            borderRadius="26px"
            sx={{
              padding: "8px",
              width: {
                sm: "260px",
                xs: "100%",
              },
            }}
          />
        </Box>
        <Grid container gap="4px" mt="16px" paddingX="8px">
          <Grid item>
            <Typography variant="h1" fontSize="14px" fontWeight="bold">
              {title}
            </Typography>
            <Typography
              variant="body1"
              color="#4C4C4C"
              fontSize="14px"
              fontWeight="light"
            >
              {author}
            </Typography>
          </Grid>
          <Grid
            item
            alignItems="center"
            justifySelf="center"
            position="absolute"
            bottom="16px"
          >
            <Button
              component="button"
              variant={checkIfAdded() ? "contained" : "contained"}
              color="primary"
              startIcon={!checkIfAdded() ? <BookmarkIcon /> : <RemoveIcon />}
              onClick={() => {
                if (checkIfAdded()) {
                  removeBook(title);
                  return;
                }
                addBook({ title, author, coverPhotoURL, readingLevel });
              }}
              sx={{
                color: "white",
                width: "230px",
                textTransform: "none",
              }}
            >
              {checkIfAdded() ? "Remove" : "Bookmark"}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

export default BookComponent;
