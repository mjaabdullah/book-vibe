import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { getListFromLocalDB, setListToLocalDB } from "../utils/RedListLocalDB";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [markAsRead, setMarkAsRead] = useState(() =>
    getListFromLocalDB("redList"),
  );
  const [wishlist, setWishlist] = useState(() =>
    getListFromLocalDB("wishList"),
  );

  const handleMarkAsRead = (currentBook) => {
    const isExistBook = markAsRead.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.error("You have already marked this book as read.");
      return;
    }

    setMarkAsRead([...markAsRead, currentBook]);
    toast.success(`You have marked "${currentBook.bookName}" as read.`);
    setListToLocalDB("redList", currentBook);
  };

  const handleWishlist = (currentBook) => {
    const isExistReadList = markAsRead.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistReadList) {
      toast.error(
        "You have already marked this book as read. You can't add it to wishlist.",
      );
      return;
    }
    const isExistBook = wishlist.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.error("You have already added this book to your wishlist.");
      return;
    }

    setWishlist([...wishlist, currentBook]);
    toast.success(`You have added "${currentBook.bookName}" to your wishlist.`);
    setListToLocalDB("wishList", currentBook);
  };
  const data = {
    markAsRead,
    setMarkAsRead,
    handleMarkAsRead,
    wishlist,
    setWishlist,
    handleWishlist,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
