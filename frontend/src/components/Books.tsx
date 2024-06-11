import { useQuery } from "@apollo/client";
import { Book, Books } from "../data/graphModels";
import { GET_BOOKS } from "../data/graphql";
import BookComponent from "./Book";
import { Box, Grid } from "@mui/material";
import LiveSearch from "./LiveSearch";
import { useState } from "react";
import EmptyState from "./EmptyState";

function BooksComponent() {
  const { loading, error, data } = useQuery<Books>(GET_BOOKS);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [filtered, setFiltered] = useState<boolean>(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <Box>
        <LiveSearch
          filterdBooks={filteredBooks}
          books={data!.books}
          setFilteredBooks={setFilteredBooks}
          setFiltered={setFiltered}
        />
      </Box>
      {filtered && filteredBooks.length === 0 ? (
        <Box width="100%" display="flex" justifyContent="center" mt={8}>
          <EmptyState />
        </Box>
      ) : (
        <Grid
          container
          paddingX="80px"
          sx={{
            px: {
              xs: "2px",
              md: "40px",
              lg: "80px",
            },
          }}
          spacing="30px"
          alignItems="center"
          justifyItems="center"
        >
          {!filtered &&
            data?.books.map(
              ({ title, author, coverPhotoURL, readingLevel }) => (
                <BookComponent
                  key={`${title}-${coverPhotoURL}-${author}`}
                  author={author}
                  title={title}
                  coverPhotoURL={coverPhotoURL}
                  readingLevel={readingLevel}
                />
              ),
            )}

          {filtered &&
            filteredBooks.map(
              ({ title, author, coverPhotoURL, readingLevel }) => (
                <BookComponent
                  key={`${title}-${coverPhotoURL}-${author}`}
                  author={author}
                  title={title}
                  coverPhotoURL={coverPhotoURL}
                  readingLevel={readingLevel}
                />
              ),
            )}
        </Grid>
      )}
    </>
  );
}

export default BooksComponent;
