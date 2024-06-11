import {
  Box,
  Button,
  Checkbox,
  Grid,
  ListItem,
  Typography,
} from "@mui/material";
import { useBooks } from "../state/useContext";
import { useState } from "react";
import RemoveIcon from "../assets/RemoveIcon";
import EmptyStateSelections from "./EmptyStateSelections";

function DrawerItems() {
  const { addedBooks, removeBook, removeSelected } = useBooks();
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckboxClick = (e: any) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckedItems([...checkedItems, value]); //*1 해줘야 number로 들어가서 type 호환이 됨.
    } else {
      setCheckedItems(checkedItems.filter((item) => item != value));
    }
  };

  if (addedBooks.length === 0)
    return (
      <Box display="flex" height="100%" paddingX={20}>
        <EmptyStateSelections />;
      </Box>
    );

  return (
    <>
      {addedBooks.map((book) => (
        <Box>
          <ListItem sx={{ borderBottom: "1px solid #ccc" }}>
            <Checkbox
              value={book.title}
              checked={checkedItems.includes(book.title)}
              onChange={handleCheckboxClick}
            />
            <Box
              sx={{ background: "white", padding: "12px" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={2}
              borderRadius="38px"
            >
              <Box
                component="img"
                src={book.coverPhotoURL}
                width={180}
                height={170}
                borderRadius="26px"
                sx={{
                  padding: "8px",
                  height: {
                    sm: "170px",
                    xs: "64px",
                  },
                  width: {
                    sm: "180px",
                    xs: "64px",
                  },
                }}
              />
              <Grid>
                <Typography width={200}>{book.title}</Typography>
                <Typography
                  variant="body1"
                  color="#4C4C4C"
                  fontSize="14px"
                  fontWeight="light"
                >
                  {book.author}
                </Typography>
              </Grid>

              <Button
                component="button"
                variant="outlined"
                color="primary"
                startIcon={<RemoveIcon />}
                onClick={() => {
                  removeBook(book.title);
                }}
              >
                Remove
              </Button>
            </Box>
          </ListItem>
        </Box>
      ))}

      <Box display="flex" justifyContent="center" width="100%">
        <Button
          component="button"
          disabled={!checkedItems.length > 0}
          variant="contained"
          sx={{ position: "fixed", bottom: "12px", color: "white" }}
          color="primary"
          onClick={() => {
            removeSelected(checkedItems);
          }}
        >
          Clear Selected
        </Button>
      </Box>
    </>
  );
}

export default DrawerItems;
