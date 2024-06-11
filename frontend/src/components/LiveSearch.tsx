import { Autocomplete, TextField } from "@mui/material";
import { Book } from "../data/graphModels";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import { uniqueByKey } from "./utils/uniqueByKey";

interface Iprops {
  books: Book[];
  setFilteredBooks: (books: Book[]) => void;
  setFiltered: (state: boolean) => void;
  setQuery: (state: string) => void;
  setReadingLevel: (state: string) => void;
  query: string;
  readingLevel: string;
  filterdBooks: Book[];
}

function LiveSearch({
  books,
  setFilteredBooks,
  filterdBooks,
  setFiltered,
}: Iprops) {
  const [query, setQuery] = useState<string>("");
  const [readingLevel, setReadingLevel] = useState<string | null>("");

  let optionsLevel = uniqueByKey(books, "readingLevel");

  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setQuery(event.target.value);
    setFiltered(true);

    if (event.target.value.length === 0) {
      setFiltered(false);
      return;
    }

    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(event.target.value) ||
        book.author.toLowerCase().includes(event.target.value),
    );
    setFilteredBooks(filtered);
  };

  const handleReadingLevelChange = (event: any, value: string | null) => {
    setReadingLevel(value);
    setFiltered(true);
    if (value === null) setFiltered(false);

    const filtered =
      filterdBooks.length > 0
        ? filterdBooks.filter((book) => book.readingLevel === value)
        : books.filter((book) => book.readingLevel === value);
    setFilteredBooks(filtered);
  };

  return (
    <Grid2
      container
      justifyContent="flex-end"
      sx={{ paddingX: { sm: "20px", md: "40px" } }}
    >
      <Grid2 md={6} sm={12} lg={4} xs={12}>
        <TextField
          placeholder="Search by title, author, or reading level"
          fullWidth
          id="outlined-basic"
          variant="outlined"
          value={query}
          onChange={(e) => handleSearch(e)}
        />
      </Grid2>
      <Grid2 lg={2} md={6} sm={12} xs={12}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          onChange={handleReadingLevelChange}
          options={optionsLevel.map((option: Book) => option.readingLevel)}
          renderInput={(params) => (
            <TextField {...params} label="Reading Level" />
          )}
        />
      </Grid2>
    </Grid2>
  );
}

export default LiveSearch;
