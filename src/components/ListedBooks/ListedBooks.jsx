import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../Utility/localStorage";
import SelectedList from "../SelectedList/SelectedList";

const ListedBooks = () => {
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);
    const [wishListBooks, setWishListBook] = useState([]);
    const [displayReadBook, setDisplayReadBook] = useState([]);

    const [activeTab, setActiveTab] = useState("readBooks");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const saveReedBookId = getStoredBooks('read-Book-List');
        const seveWishBookId = getStoredBooks('wish-Book-list');
        if (seveWishBookId.length > 0) {
            const list = books.filter(book => seveWishBookId.includes(book.bookId));
            setWishListBook(list);
        }
        if (saveReedBookId.length > 0) {
            const list = books.filter(book => saveReedBookId.includes(book.bookId));
            setReadBooks(list);
            setDisplayReadBook(list); // Initialize with all read books
        }
    }, [books]);

    const handleBooksFilter = (filter) => {
        if (filter === 'all') {
            setDisplayReadBook(readBooks); // Show all books
        } else if (filter === 'Fiction') {
            const selectedBooks = readBooks.filter(book => book.category === 'Fiction');
            setDisplayReadBook(selectedBooks); // Show Fiction books
        } else if (filter === 'rating') {
            const sortedBooks = [...readBooks].sort((a, b) => b.rating - a.rating);
            setDisplayReadBook(sortedBooks); // Sort by rating in descending order
        }
        setDropdownOpen(false); // Close dropdown
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
                                onClick={() => handleBooksFilter('all')}
                            >
                                All
                            </li>
                            <li
                                className="bg-gray-400 text-xl border-green-400 rounded-2xl text-center p-2 text-white cursor-pointer"
                                onClick={() => handleBooksFilter('Fiction')}
                            >
                                Fiction
                            </li>
                            <li
                                className="bg-gray-400 text-xl border-green-400 rounded-2xl text-center p-2 text-white cursor-pointer"
                                onClick={() => handleBooksFilter('rating')}
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
                    className={`px-4 py-2 text-sm ${activeTab === "readBooks" ? "text-black border-2 font-medium border-b-0 rounded-t-xl border-black" : "text-gray-500 font-normal"}`}
                    onClick={() => setActiveTab("readBooks")}
                >
                    Read Books
                </button>
                <button
                    className={`px-4 py-2 text-sm ${activeTab === "wishlistBooks" ? "text-black border-2 font-medium border-b-0 rounded-t-xl border-black" : "text-gray-500 font-normal"}`}
                    onClick={() => setActiveTab("wishlistBooks")}
                >
                    Wishlist Books
                </button>
            </div>

            {/* Tab Content */}
            <div className="mt-5">
                {activeTab === "readBooks" && (
                    <div className="space-y-5">
                        {displayReadBook.map(book => <SelectedList key={book.id} book={book} />)}
                    </div>
                )}
                {activeTab === "wishlistBooks" && (
                    <div className="space-y-5">
                        {wishListBooks.map(book => <SelectedList key={book.id} book={book} />)}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListedBooks;
