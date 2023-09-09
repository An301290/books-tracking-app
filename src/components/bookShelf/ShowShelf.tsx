import React from "react";
import { Book } from "../SearchBook";

interface CurrentlyReadingProps {
  books: Book[];
  nameOfShelf: string;
}

const ShowShelf = ({ books, nameOfShelf }: CurrentlyReadingProps) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{nameOfShelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <li>
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
                    {/* <BookShelfChanger /> */}
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
