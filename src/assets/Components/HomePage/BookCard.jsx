import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/book-details/${book.bookId}`}
      className="card bg-base-100 shadow-sm"
    >
      <figure className="bg-gray-100 rounded-2xl py-4">
        <img
          className="max-h-50 rounded-sm object-cover"
          src={book.image}
          alt={book.bookName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{book.bookName}</h2>
        <div className="flex gap-2">
          {book.tags.map((tag, index) => (
            <div
              className="badge badge-soft badge-outline badge-success "
              key={index}
            >
              {tag}
            </div>
          ))}
        </div>
        <p className="font-semibold text-lg text-gray-500">By: {book.author}</p>
        <div className="card-actions justify-between border-t border-dashed pt-4 border-gray-300 mt-auto">
          <div className="font-semibold">{book.category}</div>
          <div className="font-bold flex items-center gap-1">
            <FaRegStar />
            {book.rating}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
