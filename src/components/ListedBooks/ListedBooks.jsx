import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks, saveBookToStorage } from "../../Utility/localStorage";
import SelectedList from "../SelectedList/SelectedList";

const ListedBooks = () => {
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);
    const [wishListBooks, setWishListBooks] = useState([]);
    const [displayReadBook, setDisplayReadBook] = useState([]);
    const [activeTab, setActiveTab] = useState("readBooks");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const savedReadBookIds = getStoredBooks("read-Book-List");
        const savedWishBookIds = getStoredBooks("wish-Book-list");

        if (savedReadBookIds.length > 0) {
            const list = books.filter((book) => savedReadBookIds.includes(book.bookId));
            setReadBooks(list);
            setDisplayReadBook(list);
        }

        if (savedWishBookIds.length > 0) {
            const list = books.filter((book) => savedWishBookIds.includes(book.bookId));
            setWishListBooks(list);
        }
    }, [books]);

    const handleAddToReadList = (book) => {
        // Check if the book exists in the wishlist
        const isInWishList = wishListBooks.some((wishBook) => wishBook.bookId === book.bookId);
        

        // If the book is in the wishlist, remove it
        if (isInWishList) {
            const updatedWishList = wishListBooks.filter((wishBook) => wishBook.bookId !== book.bookId);
            setWishListBooks(updatedWishList);
            saveBookToStorage("wish-Book-list", updatedWishList.map((b) => b.bookId));
        }

        // Check if the book already exists in the read list
        const isInReadList = readBooks.some((readBook) => readBook.bookId === book.bookId);

        // Add the book to the read list only if it's not already there
        if (!isInReadList) {
            const updatedReadList = [...readBooks, book];
            setReadBooks(updatedReadList);
            setDisplayReadBook(updatedReadList);
            saveBookToStorage("read-Book-List", updatedReadList.map((b) => b.bookId));
        }
    };


    const handleBooksFilter = (filter) => {
        if (filter === "all") {
            setDisplayReadBook(readBooks);
        } else if (filter === "Fiction") {
            const selectedBooks = readBooks.filter((book) => book.category === "Fiction");
            setDisplayReadBook(selectedBooks);
        } else if (filter === "rating") {
            const sortedBooks = [...readBooks].sort((a, b) => b.rating - a.rating);
            setDisplayReadBook(sortedBooks);
        }
        setDropdownOpen(false);
    };

    return (
        <div className="mx-auto max-w-6xl mt-10 space-y-3">
            <div className="bg-amber-100 text-center p-5 mx-auto text-2xl text-black font-bold">
                <h2>Books</h2>
            </div>

            {/* Filter */}
            <div className="flex justify-center">
                <div className="relative">
                    <button
                        className="btn m-1 flex items-center"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <IoIosArrowDown className="mr-2" /> Filter by
                    </button>
                    {dropdownOpen && (
                        <ul className="menu absolute gap-2 right-0 mt-2 bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li
                                className="bg-gray-400 text-xl border-green-400 rounded-2xl text-center p-2 text-white cursor-pointer"
                                onClick={() => handleBooksFilter("all")}
                            >
                                All
                            </li>
                            <li
                                className="bg-gray-400 text-xl border-green-400 rounded-2xl text-center p-2 text-white cursor-pointer"
                                onClick={() => handleBooksFilter("Fiction")}
                            >
                                Fiction
                            </li>
                            <li
                                className="bg-gray-400 text-xl border-green-400 rounded-2xl text-center p-2 text-white cursor-pointer"
                                onClick={() => handleBooksFilter("rating")}
                            >
                                Rating (High to Low)
                            </li>
                        </ul>
                    )}
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b">
                <button
                    className={`px-4 py-2 text-sm ${activeTab === "readBooks"
                        ? "text-black border-2 font-medium border-b-0 rounded-t-xl border-black"
                        : "text-gray-500 font-normal"
                        }`}
                    onClick={() => setActiveTab("readBooks")}
                >
                    Read Books
                </button>
                <button
                    className={`px-4 py-2 text-sm ${activeTab === "wishlistBooks"
                        ? "text-black border-2 font-medium border-b-0 rounded-t-xl border-black"
                        : "text-gray-500 font-normal"
                        }`}
                    onClick={() => setActiveTab("wishlistBooks")}
                >
                    Wishlist Books
                </button>
            </div>

            {/* Tab Content */}
            <div className="mt-5">
                {activeTab === "readBooks" && (
                    <div className="space-y-5">
                        {displayReadBook.map((book) => (
                            <SelectedList key={book.id} book={book} />
                        ))}
                    </div>
                )}
                {activeTab === "wishlistBooks" && (
                    <div className="space-y-5">
                        {wishListBooks.map((book) => (
                            <div key={book.id}>
                                <SelectedList book={book} />
                                <button
                                    className="mt-2 p-2 bg-blue-500 text-white rounded"
                                    onClick={() => handleAddToReadList(book)}
                                >
                                    Add to Read List
                                </button>
                            </div>
                        ))}
                    </div>

                )}
            </div>
        </div>
    );
};

export default ListedBooks;
