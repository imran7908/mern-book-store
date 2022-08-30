import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import "./Book.css";

const Books = ({ URL }) => {
  const fetchHandler = async () => {
    return await axios.get(`${URL}/books`).then((res) => res.data);
  };
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);

  return (
    <div>
      <ul>
        {books &&
          books.map((book, index) => {
            return (
              <li key={index}>
                <Book book={book} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Books;
