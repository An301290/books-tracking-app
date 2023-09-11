import React, { useState } from "react";
import { Book } from "./SearchBook";

interface SelfChangerProps {
  books: Book[];
  onUpdateShelf: (bookId: string, newShelf: string) => void;
}

const BookShelfChanger = ({ books, onUpdateShelf }: SelfChangerProps) => {
  const [selectedShelf, setSelectedShelf] = useState<string>("");

  const handleShelfChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    bookId: string
  ) => {
    const newValue = event.target.value;
    setSelectedShelf(newValue);
    console.log("Im the shelter", books);
    onUpdateShelf(bookId, newValue);
  };

  return (
    <div className="book-shelf-changer">
      {books.map((showingShelf) => (
        <select
          key={showingShelf.title}
          onChange={(e) => handleShelfChange(e, showingShelf.id)}
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
      ))}
    </div>
  );
};

export default BookShelfChanger;
