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
    const [displayWishBook, setDisplayWishBook] = useState([]);

    useEffect(() => {
        const saveReedBookId = getStoredBooks('read-Book-List');
        const seveWishBookId = getStoredBooks('wish-Book-list');
        if (seveWishBookId.length > 0) {
            const list = books.filter(book => seveWishBookId.includes(book.bookId) );
            setWishListBook(list);
            setDisplayWishBook(list);
        }
        if (saveReedBookId.length > 0) {
            const list = books.filter(book => saveReedBookId.includes(book.bookId));
            setReadBooks(list);
            setDisplayReadBook(list);
        }

    }, [books]);
    console.log(wishListBooks);


    console.log(books);
    const [activeTab, setActiveTab] = useState("readBooks");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const handleBooksFilter = (filter) => {

        if (filter === 'all') {
            setDisplayJobs(appliedJob);
        } else if (filter === 'remote') {
            const remoteJobs = appliedJob.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        } else if (filter === 'onsite') {
            const onsiteJobs = appliedJob.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
        setDropdownOpen(false); // Close the dropdown after selecting a filter
    };

    // const readBook = ["Book 1", "Book 2", "Book 3"];
    // const wishlistBook = ["Book A", "Book B", "Book C"];

    return (
        <div className="mx-auto max-w-6xl mt-10 space-y-3">
            <div className=" bg-amber-100 text-center p-5 mx-auto text-2xl text-black font-bold ">
                <h2>Books </h2>
            </div>
            {/* filter  */}
            <div className="flex justify-center">
                <div className="relative">
                    <button
                        className="btn m-1 flex items-center"
                        onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown visibility
                    >
                        <IoIosArrowDown className="mr-2" /> Filter by
                    </button>
                    {dropdownOpen && ( // Show dropdown if `dropdownOpen` is true
                        <ul className="menu absolute gap-2 right-0 mt-2 bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li
                                className="bg-gray-400 text-xl border-green-400 rounded-2xl text-center p-2 text-white cursor-pointer"
                                onClick={() => handleBooksFilter('all')}
                            >
                                All
                            </li>
                            <li
                                className="bg-gray-400 text-xl border-green-400 rounded-2xl text-center p-2 text-white cursor-pointer"
                                onClick={() => handleBooksFilter('remote')}
                            >
                                Remote
                            </li>
                            <li
                                className="bg-gray-400 text-xl border-green-400 rounded-2xl text-center p-2 text-white cursor-pointer"
                                onClick={() => handleBooksFilter('onsite')}
                            >
                                Onsite
                            </li>
                        </ul>
                    )}
                </div>
            </div>
            {/* Tabs Header */}
            <div className="flex border-b">
                <button
                    className={`px-4 py-2 text-sm  ${activeTab === "readBooks"
                        ? "text-black border-2 font-medium border-b-0 rounded-t-xl border-black"
                        : "text-gray-500 font-normal"
                        }`}
                    onClick={() => setActiveTab("readBooks")}
                >
                    Read Books
                </button>
                <button
                    className={`px-4 py-2 text-sm font-medium ${activeTab === "wishlistBooks"
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
                    <div className=" space-y-5">
                        {
                            readBooks.map((book)=> <SelectedList key={book.id} book={book}></SelectedList> )
                        }
                    </div>
                    // <ul>
                    //     {readBooks.map((book, index) => (
                    //         <li key={index} className="py-1 text-gray-700">
                    //             {book}
                    //         </li>
                    //     ))}
                    // </ul>
                )}
                {activeTab === "wishlistBooks" && (
                    <div className=" space-y-5">
                    {
                        wishListBooks.map((book)=> <SelectedList key={book.id} book={book}></SelectedList> )
                    }
                </div>
                    // <ul>
                    //     {/* {wishlistBooks.map((book, index) => (
                    //         <li key={index} className="py-1 text-gray-700">
                    //             {book}
                    //         </li>
                    //     ))} */}
                    //     {

                    //     }
                    // </ul>
                )}
            </div>
        </div>
    );
};

export default ListedBooks;
