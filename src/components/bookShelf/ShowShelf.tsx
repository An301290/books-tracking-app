import React from "react";
import { Book } from "../SearchBook";
import BookShelfChanger from "../BookShelfChanger";

interface CurrentlyReadingProps {
  books: Book[];
  nameOfShelf: string;
  onUpdateShelf: (bookId: string, newShelf: string) => void;
}

const ShowShelf = ({
  books,
  nameOfShelf,
  onUpdateShelf,
}: CurrentlyReadingProps) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{nameOfShelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
                      }}
                    ></div>
                    <BookShelfChanger
                      books={books}
                      onUpdateShelf={onUpdateShelf}
                    />
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default ShowShelf;
