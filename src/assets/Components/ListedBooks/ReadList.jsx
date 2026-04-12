import { useContext } from "react";
import { BookContext } from "../../../context/BookContext";

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
    <div>
      {sortList.map((book) => (
        <div key={book.bookId}>
          <h2>{book.bookName}</h2>
          <p>Pages: {book.totalPages}</p>
          <p>Rating: {book.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default ReadList;
