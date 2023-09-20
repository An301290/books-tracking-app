import React, { useState } from "react";
import { Book } from "./SearchBook";

interface SelfChangerProps {
  books: Book[];
  onUpdateShelf: (bookId: string, newShelf: string) => void;
}

const BookShelfChanger = ({ books, onUpdateShelf }: SelfChangerProps) => {
  const [selectedShelf, setSelectedShelf] = useState<string>("");

  const getBookValues = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newShelfValue = event.target.value;
    const bookId = event.target.id;
    onUpdateShelf(bookId, newShelfValue);
  };

  return (
    <div className="book-shelf-changer">
      {books.map((book) => {
        return (
          <select
            key={book.title}
            onChange={(e) => getBookValues(e)}
            id={book.id}
            value={selectedShelf}
          >
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        );
      })}
    </div>
  );
};

export default BookShelfChanger;
