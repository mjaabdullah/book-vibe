import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookContext";

const BookDetails = () => {
  const { id } = useParams();
  const loaderData = useLoaderData();
  const book = loaderData.find((b) => b.bookId === Number(id));
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const { handleMarkAsRead, handleWishlist } = useContext(BookContext);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 bg-base-100 shadow-sm max-w-7xl mx-auto my-10 p-6">
      <figure className="w-full bg-gray-100 flex items-center justify-center rounded-2xl py-4">
        <img src={image} alt={bookName} className="h-100 " />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title">{bookName}</h2>
        <div>By: {author}</div>
        <div className="py-3 border-y border-gray-300">{category}</div>
        <p>
          <strong>Review:</strong> {review}
        </p>
        <div className="flex gap-4 items-center border-b border-gray-300 pb-4">
          <strong>Tag:</strong>{" "}
          <div className="flex gap-3 items-center ">
            {tags.map((tag, ind) => (
              <div key={ind} className="badge badge-soft badge-success ">
                {"#"}
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 ">
          <span>Number of Pages:</span> <span>{totalPages}</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 ">
          <span>Publisher:</span> <span>{publisher}</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3">
          <span>Year of Publishing:</span> <span>{yearOfPublishing}</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3">
          <span>Rating:</span> <span>{rating}</span>
        </div>
        <div className="card-actions gap-4">
          <button onClick={() => handleMarkAsRead(book)} className="btn ">
            Mark as read
          </button>
          <button
            onClick={() => handleWishlist(book)}
            className="btn btn-primary"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
