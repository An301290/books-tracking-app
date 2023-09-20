import { useState, useEffect } from "react";
import BookShelfChanger from "./BookShelfChanger";

export interface Book {
  title: string;
  id: string;
  authors: string[];
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  industryIdentifiers: {
    type: string;
    identifier: string;
  }[];
  shelf: string;
}

interface SearchBoxProps {
  showSearchPage: boolean;
  setShowSearchpage: (value: boolean) => void;
  books: Book[];
  onUpdateShelf:(bookId: string, newShelf: string) => void;

}

const SearchBook = ({
  showSearchPage,
  setShowSearchpage,
  books,
  onUpdateShelf
}: SearchBoxProps) => {
  const [query, setQuery] = useState("");

  const updateQuery = (query: string) => {
    setQuery(query.trim());
  };

  const showingBooks =
    query === ""
      ? books
      : books.filter((book) =>
          book.title.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a
          className="close-search"
          onClick={() => setShowSearchpage(!showSearchPage)}
        >
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>

      <div className="search-books-results">
        <ol className="books-grid">
          {showingBooks.map((showingBook) => (
            <li key={showingBook.title}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${showingBook.imageLinks.smallThumbnail})`,
                    }}
                  ></div>
                  <BookShelfChanger
                    books={books}
                    onUpdateShelf={onUpdateShelf}
                  />
                </div>
                <div className="book-title">{showingBook.title}</div>
                <div className="book-authors">{showingBook.authors}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchBook;
