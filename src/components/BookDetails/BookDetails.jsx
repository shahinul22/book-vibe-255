import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const book = useLoaderData();
    const books = book.books;
    console.log(books);
    const { bookId } = useParams();
    console.log('Params:', bookId); // Ensure bookId exists
    const id = parseInt(bookId, 10);
    console.log('Parsed ID:', id,typeof bookId, typeof id); // Ensure id is a number
    

    if (!book) {
        return <div>Book details not available!</div>;
    }

    return (
        <div className="book-details">
            
            <h1>{book.bookName}</h1>
            <h2>by {books.length} {book.author}</h2>
            <p>{book.review}</p>
            <p>Category: {book.category}</p>
            <p>Rating: {book.rating} ⭐</p>
            <p>Total Pages: {book.totalPages}</p>
            <p>Publisher: {book.publisher} ({book.yearOfPublishing})</p>
        </div>
    );
};

export default BookDetails;
