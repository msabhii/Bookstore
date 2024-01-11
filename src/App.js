import FavBooks from "./Components/FavBooks";
import BookCreate from "./Components/BookCreate";
import BookShow from "./Components/BookShow";
// import BookList from "./Components/BookList";
import Footer from "./Components/Footer";
// import { useState } from "react";
import searchBook from "./API";
import { useState } from "react";
import BookList from "./Components/BookList";
import Navbar from "./Components/Navbar";

function App() {
  const [books, setBooks] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchBook(term);
    console.log("from App", result);
    setBooks(result);
  };

  return (
    <div>
      <Navbar />
      <BookCreate onSubmit={handleSubmit} />
      <BookList books={books} />
      <Footer />
    </div>
  );
}

export default App;
