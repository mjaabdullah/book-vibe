import { useContext } from "react";
import { BookContext } from "../../../context/BookContext";
import Book from "./Book";

const WishList = ({ sortingType }) => {
  const { wishlist } = useContext(BookContext);
  let sortList = wishlist;

  if (sortingType === "Pages") {
    sortList = [...wishlist].sort((a, b) => a.totalPages - b.totalPages);
  } else if (sortingType === "Rating") {
    sortList = [...wishlist].sort((a, b) => a.rating - b.rating);
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {sortList.map((book) => (
        <Book key={book.bookId} book={book} dataType="wishList" />
      ))}
    </div>
  );
};

export default WishList;
