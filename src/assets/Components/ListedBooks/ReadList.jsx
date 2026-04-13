import { useContext } from "react";
import { BookContext } from "../../../context/BookContext";
import Book from "./Book";

const ReadList = ({ sortingType }) => {
  const { markAsRead } = useContext(BookContext);
  let sortList = markAsRead;
  if (sortingType) {
    if (sortingType === "Pages") {
      sortList = [...markAsRead].sort((a, b) => a.totalPages - b.totalPages);
    } else if (sortingType === "Rating") {
      sortList = [...markAsRead].sort((a, b) => a.rating - b.rating);
    }
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {sortList.map((book) => (
        <Book key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default ReadList;
