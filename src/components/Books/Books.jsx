import React, { useEffect, useState } from 'react';
import Book from './../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]); // Initialize as an empty array
    const [error, setError] = useState(null); // To store error messages
    const [displayBooks, setDisplayBooks] = useState(6);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await fetch('books.json');
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const data = await res.json();
                setBooks(data); // Access the 'books' array from the JSON
                // console.log(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchBooks();
    }, []);


    return (
        <div className="my-10">
            <h2 className="text-3xl text-center font-bold my-5">
                Books {books.length > 0 ? `(${books.length})` : ''}
            </h2>

            {error && (
                <p className="text-center text-red-500">
                    Error: {error}
                </p>
            )}
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    books.slice(0, displayBooks).map((book,index) => <Book key={index} book={book}></Book>)
                }
            </div>
            {/* See All Button */}
            {displayBooks < books.length && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setDisplayBooks(books.length)}
                        className="btn px-7 text-2xl btn-primary text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]"
                    >
                        See All
                    </button>
                </div>
            )}
            {/* {books.length > 0 ? (
                <ul className="max-w-4xl mx-auto">
                    {books.map((book) => (
                        <li key={book.bookId} className="p-4 border-b">
                            <img src={book.image} alt={book.bookName} className="w-16 h-24 object-cover mb-4" />
                            <h3 className="text-xl font-bold">{book.bookName}</h3>
                            <p>Author: {book.author}</p>
                            <p>Category: {book.category}</p>
                            <p>Rating: {book.rating}</p>
                            <p>Year of Publishing: {book.yearOfPublishing}</p>
                            <p className="text-sm text-gray-500">{book.review}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                !error && (
                    <p className="text-center text-gray-500">
                        No books available.
                    </p>
                )
            )} */}
        </div>
    );
};

export default Books;
