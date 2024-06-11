import { Box, Button, Drawer, Stack, Typography } from "@mui/material";
import Logo from "../assets/Logo";
import { useBooks } from "../state/useContext";
import theme from "../theme";
import { useState } from "react";
import DrawerItems from "./DrawerItems";

function Navbar() {
  const { addedBooks } = useBooks();

  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      position="sticky"
      top="0px"
      paddingY="20px"
      sx={{
        height: "60px",
        zIndex: 10,
        backgroundColor: "white",
        px: {
          sm: "12px",
          xs: "12px",
          md: "80px",
        },
      }}
    >
      <Logo />
      <Button
        sx={{
          border: "1px solid #4EA9A9 ",
          borderRadius: "48px",
          padding: "0px 20px",
          position: "relative",
        }}
        onClick={toggleDrawer(true)}
      >
        My Selections
        <Typography
          sx={{
            position: "absolute",
            top: -8,
            right: 0,
            backgroundColor: theme.palette.primary.contrastText,
            borderRadius: "100%",
            height: 24,
            width: 24,
            color: "white",
          }}
        >
          {addedBooks.length}
        </Typography>
      </Button>
      <Drawer
        sx={{ position: "relative", width: "50%" }}
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
      >
        <DrawerItems />
      </Drawer>
    </Box>
  );
}

export default Navbar;
