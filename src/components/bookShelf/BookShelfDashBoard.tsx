import React from "react";
import ShowShelf from "./ShowShelf";
import { Book } from "../SearchBook";

export interface ShelfDashBoardProps {
  books: Book[];
  onUpdateShelf: (bookId: string, newShelf: string) => void;
}

const BookShelfDashBoard = ({
  books,
  onUpdateShelf
}: ShelfDashBoardProps) => {
  const shelves = [
    { shelf: "currentlyReading", nameOfShelf: "Currently Reading" },
    { shelf: "wantToRead", nameOfShelf: "Want to Read" },
    { shelf: "read", nameOfShelf: "Read" },
  ];
  return (
    <div className="list-books">
      <div>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map((shelf) => {
              // console.log(shelf);
              return (
                <ShowShelf
                  key={shelf.shelf}
                  books={books.filter((book) => book.shelf === shelf.shelf)}
                  nameOfShelf={shelf.nameOfShelf}
                  onUpdateShelf={onUpdateShelf}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookShelfDashBoard;
