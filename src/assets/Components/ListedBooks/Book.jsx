import { useContext } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiGroupLine } from "react-icons/ri";
import { Link } from "react-router";
import { BookContext } from "../../../context/BookContext";

const Book = ({ book, dataType }) => {
  const { handleDeleteFromReadList } = useContext(BookContext);
  return (
    <div className="card card-side bg-base-100 shadow-md border border-base-200 rounded-2xl overflow-hidden flex-col md:flex-row">
      <figure className="min-w-30 max-w-full md:max-w-30 p-4 flex items-center justify-center">
        <img
          src={book.image}
          alt={book.bookName}
          className="w-22.5 h-32.5 object-cover rounded-md"
        />
      </figure>

      <div className="card-body p-4 gap-1">
        <h2 className="card-title text-[24px] font-bold">{book.bookName}</h2>
        <p className="text-[16px] text-gray-500 font-medium">
          By : {book.author}
        </p>

        <div className="flex items-center gap-2 flex-wrap mt-1">
          <span className="flex items-center gap-2 flex-wrap font-medium">
            <span className="text-gray-500">Tag</span>
            {book.tags.map((tag, ind) => (
              <span key={ind} className="badge badge-warning badge-outline">
                #{tag}
              </span>
            ))}
          </span>
          <span className=" text-gray-400">
            Year of Publishing: {book.yearOfPublishing}
          </span>
        </div>

        <div className="mt-1 flex gap-2 flex-wrap text-gray-500">
          <span className="flex gap-1 items-center">
            {" "}
            <RiGroupLine />
            Publisher: {book.publisher}
          </span>
          <span className="flex gap-1 items-center">
            {" "}
            <IoDocumentTextOutline />
            Page {book.totalPages}
          </span>
        </div>

        <div className="card-actions items-center mt-1 gap-2 flex-wrap">
          <span className="badge  text-blue-500  bg-blue-50">
            Category: {book.category}
          </span>
          <span className="badge text-orange-500 bg-orange-50">
            Rating: {book.rating}
          </span>
          <button className="btn btn-sm bg-green-500 text-white border-none rounded-full">
            <Link to={`/book-details/${book.bookId}`}>View Details</Link>
          </button>
        </div>
      </div>
      <div className="card-actions flex-col items-center justify-center p-4">
        <button
          onClick={() => handleDeleteFromReadList(dataType, book.bookId)}
          className="btn w-full md:w-auto btn-warning"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Book;
