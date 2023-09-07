import React, { useState } from "react";
import { Book } from "./SearchBook";

interface SelfChangerProps {
  books: Book[];
}

const BookShelfChanger = ({ books }: SelfChangerProps) => {
  const [selectedShelf, setSelectedShelf] = useState<string>("");
  const handleShelfChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedShelf(newValue);
    console.log("Im the shelter", books);

    // Add additional logic here to update the shelf value for the book in your data
    // Call a function to update the book's shelf in your parent component
  };

  return (
    <div className="book-shelf-changer">
      {books.map((showingShelf) => (
        <select
          key={showingShelf.title}
          onChange={handleShelfChange}
          value={showingShelf.shelf}
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
