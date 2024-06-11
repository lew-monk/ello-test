import React, { createContext, useContext, useState, ReactNode } from "react";
import { Book } from "../data/graphModels";

interface GlobalContextType {
  query: string;
  selectedReadingLevel: string | null;
  setQuery: (query: string) => void;
  setSelectedReadingLevel: (readingLevel: string | null) => void;
  addBook: (book: Book) => void;
  removeBook: (title: string) => void;
  removeAll: () => void;
  removeSelected: (titles: string[]) => void;
  addedBooks: Book[];
}

const BooksContext = createContext<GlobalContextType | undefined>(undefined);

export const BooksProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [query, setQuery] = useState<string>("");
  const [addedBooks, setAddedBooks] = useState<Book[]>([]);
  const [selectedReadingLevel, setSelectedReadingLevel] = useState<
    string | null
  >(null);

  const addBook = (book: Book) => setAddedBooks((prev) => [...prev, book]);
  const removeBook = (title: string) =>
    setAddedBooks((prev) => [
      ...prev.filter((currBook) => currBook.title !== title),
    ]);

  const removeSelected = (title: string[]) => {
    const titlesToRemoveSet = new Set(
      title.map((title) => title.toLowerCase()),
    );

    setAddedBooks((prev) => [
      ...prev.filter(
        (book) => !titlesToRemoveSet.has(book.title.toLowerCase()),
      ),
    ]);
  };
  const removeAll = () => setAddedBooks([]);

  return (
    <BooksContext.Provider
      value={{
        query,
        addBook,
        selectedReadingLevel,
        setQuery,
        setSelectedReadingLevel,
        addedBooks,
        removeBook,
        removeAll,
        removeSelected,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = (): GlobalContextType => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useFilters must be used within a FilterProvider");
  }
  return context;
};
