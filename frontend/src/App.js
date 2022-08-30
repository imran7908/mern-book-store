import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";

const URL = "https://mern-bookstore-b.herokuapp.com/";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home URL={URL} />} exact />
          <Route path="/add" element={<AddBook URL={URL} />} exact />
          <Route path="/books" element={<Books URL={URL} />} exact />
          <Route path="/about" element={<About URL={URL} />} exact />
          <Route path="/books/:id" element={<BookDetail URL={URL} />} exact />
        </Routes>
      </main>
    </>
  );
}

export default App;
