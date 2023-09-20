import { useState, useEffect } from "react";
import "./App.css";
import * as BooksAPI from "./utils/BooksAPI";
import SearchBook from "./components/SearchBook";
import BookShelfDashBoard from "./components/bookShelf/BookShelfDashBoard";
import AddButton from "./components/AddButton";
import { Book } from "./components/SearchBook";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const getBooks = async () => {
      const response = await BooksAPI.getAll();
      setBooks(response);
    };
    getBooks();
  }, []);

  const onUpdateShelf = (bookId: string, newShelf: string) => {
    console.log(bookId, newShelf);
    const updatedBooks = [...books];
    const bookIndex = updatedBooks.findIndex((book) => book.id === bookId);
    if (bookIndex !== -1) {
      updatedBooks[bookIndex].shelf = newShelf;
      setBooks(updatedBooks);
    }
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBook
          showSearchPage={showSearchPage}
          setShowSearchpage={setShowSearchpage}
          books={books}
          onUpdateShelf={onUpdateShelf}
        />
      ) : (
        <BookShelfDashBoard books={books} onUpdateShelf={onUpdateShelf} />
      )}
      <AddButton
        showSearchPage={showSearchPage}
        setShowSearchpage={setShowSearchpage}
      />
    </div>
  );
}

export default App;
