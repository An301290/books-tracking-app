import { useState, useEffect } from "react";
import "./App.css";
import * as BooksAPI from "./utils/BooksAPI";
import SearchBook from "./components/SearchBook";
import BookShelfDashBoard from "./components/bookShelf/BookShelfDashBoard";
import AddButton from "./components/AddButton";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);
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

  const handleChangeShelf = (book: {}, bookStage: string) => {
    console.log(book);
    console.log(bookStage);
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBook
          showSearchPage={showSearchPage}
          setShowSearchpage={setShowSearchpage}
          books={books}
        />
      ) : (
        <BookShelfDashBoard books={books} />
      )}
      <AddButton
        showSearchPage={showSearchPage}
        setShowSearchpage={setShowSearchpage}
      />
    </div>
  );
}

export default App;
