import { useContext } from "react";
import { BookContext } from "../../../context/BookContext";

const WishList = ({ sortingType }) => {
  const { wishlist } = useContext(BookContext);
  let sortList = wishlist;

  if (sortingType === "Pages") {
    sortList = [...wishlist].sort((a, b) => a.totalPages - b.totalPages);
  } else if (sortingType === "Rating") {
    sortList = [...wishlist].sort((a, b) => a.rating - b.rating);
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

export default WishList;
