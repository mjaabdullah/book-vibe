import { useContext } from "react";
import { BookContext } from "../../../context/BookContext";
import Book from "./Book";

const ReadList = ({ sortingType }) => {
  const { markAsRead } = useContext(BookContext);
  let sortList = markAsRead;

   if (!sortList || sortList.length === 0) {
     return (
       <div className="max-w-7xl mx-auto min-h-[40vh] bg-base-200 flex items-center justify-center rounded-lg">
         <div className="text-center text-2xl font-bold mt-10 text-gray-400">
           Book not found
         </div>
       </div>
     );
   }


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
        <Book key={book.bookId} book={book} dataType="redList" />
      ))}
    </div>
  );
};

export default ReadList;
