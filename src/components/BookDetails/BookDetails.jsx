import { useLoaderData, useParams } from "react-router-dom";
import { getStoredBooks, saveBook } from '../../Utility/localStorage';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();

    const idInt = parseInt(id, 10);
    const book = Array.isArray(books) ? books.find((book) => book.bookId === idInt) : null;

    const { bookName, author, yearOfPublishing, publisher, tags, category, rating, totalPages, review, image } = book || {};
    const [tag1, tag2] = tags || [];

    const handleReadBooks = (title) => {
        const storedBooks = getStoredBooks(title);
        let storedReadBooks = [];

        if (title === "wish-Book-list") {
            storedReadBooks = getStoredBooks("read-Book-List");
            if (storedReadBooks.includes(idInt)) {
                toast.info("This book is already read!");
                return; // Exit if the book is in the Read list
            }
        }

        if (!storedBooks.includes(idInt)) {
            saveBook(idInt, title);
            toast.success("Book added successfully!");
        } else {
            toast.warn("This book is already added!");
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="card flex flex-col lg:flex-row gap-4 bg-base-100 shadow-xl shadow-gray-500">
                <figure className="w-full lg:w-1/3">
                    <img
                        className="w-full h-auto object-cover p-3 rounded-2xl"
                        src={image}
                        alt="Book"
                    />
                </figure>
                <div className="card-body w-full lg:w-2/3">
                    <h2 className="card-title text-2xl font-bold">{bookName}</h2>
                    <p className="font-semibold">By: {author}</p>
                    <h2 className="text-lg">{category}</h2>
                    <h2>
                        <span className="text-xl font-semibold">Review: </span>
                        {review}
                    </h2>
                    <div className="flex gap-3 items-center mt-3">
                        <h2 className=" font-bold">Tags: </h2>
                        {tag1 && <span className="text-green-500 bg-gray-100 font-semibold p-1 rounded-2xl">#{tag1}</span>}
                        {tag2 && <span className="text-green-500 bg-gray-100 font-semibold p-1 rounded-2xl">#{tag2}</span>}
                    </div>
                    <div className="space-y-2">
                        <p><span>Number of Pages:</span> {totalPages}</p>
                        <p><span>Publisher:</span> {publisher}</p>
                        <p><span>Year of publishing:</span> {yearOfPublishing}</p>
                        <p><span>Rating:</span> {rating}</p>
                    </div>
                    <div className="card-actions flex flex-wrap gap-4 mt-4">
                        <button onClick={() => handleReadBooks('read-Book-List')} className="btn border-2 border-purple-400 w-full sm:w-auto">Read</button>
                        <button onClick={() => handleReadBooks('wish-Book-list')} className="btn bg-sky-600 text-white hover:text-black w-full sm:w-auto">Wishlist</button>
                    </div>
                </div>
            </div>
            {/* Add ToastContainer here */}
            <ToastContainer position="top-right" autoClose={2000} />
        </div>
    );
};

export default BookDetails;
