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

  // first console log
  // when i click on a book, I want to know its id,I want to know the status I have clicked on,
  //and change the value of the shelf status for this book in the books state and set the new state with the new value
  //remeber in react we change the state value of an array by reacreating an array and set this new array instead as a new state
  //so it will re render BookShelfDashBoard with new values
  useEffect(() => {
    const getBooks = async () => {
      const response = await BooksAPI.getAll();
      setBooks(response);
      console.log("Im the response ", response);
    };
    getBooks();
  }, []);

  const onUpdateShelf = (bookId: string, newShelf: string) => {
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
