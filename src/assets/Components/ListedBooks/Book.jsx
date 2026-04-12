const Book = ({ book }) => {
  return (
    <div className="card card-side bg-base-100 shadow-md border border-base-200 rounded-2xl overflow-hidden">
      <figure className="min-w-30 max-w-30 p-4 flex items-center justify-center">
        <img
          src={book.image}
          alt={book.bookName}
          className="w-22.5 h-32.5 object-cover rounded-md"
        />
      </figure>

      <div className="card-body p-4 gap-1">
        <h2 className="card-title text-[17px]">{book.bookName}</h2>
        <p className="text-sm text-gray-500">By : {book.author}</p>

        <div className="flex items-center gap-2 flex-wrap mt-1">
          <span className="text-xs text-gray-500">Tag</span>
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="badge badge-warning badge-outline text-xs"
            >
              #{tag}
            </span>
          ))}
          <span className="text-xs text-gray-400">
            Year: {book.yearOfPublishing}
          </span>
        </div>

        <div className="flex gap-4 flex-wrap text-xs text-gray-500">
          <span>Publisher: {book.publisher}</span>
          <span>Page {book.totalPages}</span>
        </div>

        <div className="card-actions items-center mt-2 gap-2 flex-wrap">
          <span className="badge badge-outline text-blue-500 border-blue-300 bg-blue-50">
            Category: {book.category}
          </span>
          <span className="badge badge-outline text-orange-500 border-orange-300 bg-orange-50">
            Rating: {book.rating}
          </span>
          <button className="btn btn-sm bg-green-500 text-white border-none rounded-full ml-auto">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
