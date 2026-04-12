import { use } from "react";
import BookCard from "./BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());
const AllBooks = () => {
  const books = use(booksPromise);

  return (
    <div className="max-w-7xl mx-auto p-2.5">
      <h2 className="text-3xl text-center font-bold">Books</h2>
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
