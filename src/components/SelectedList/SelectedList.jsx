import React from 'react';
import { GrLocation } from "react-icons/gr";
import { IoPeople } from "react-icons/io5";
import { PiNotepadDuotone } from "react-icons/pi";
import { Link } from 'react-router-dom';

const SelectedList = ({ book }) => {
    const { bookId, bookName, author, yearOfPublishing, publisher, tags, category, rating, totalPages } = book || {};
    const [tag1, tag2] = tags || [];

    return (
        <div className="card card-side bg-base-100 mx-3 shadow-xl shadow-gray-500 flex flex-col sm:flex-row">
            {/* Image Section */}
            <figure className="w-full h-auto p-3 sm:w-1/3 sm:h-auto lg:w-[250px] lg:h-[250px] flex-shrink-0">
                <img
                    className="w-full h-full object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Book"
                />
            </figure>

            {/* Details Section */}
            <div className="card-body flex-grow p-4">
                <div>
                    <h2 className="card-title text-2xl font-bold">{bookName}</h2>
                    <p className="font-semibold">By: {author}</p>
                </div>
                <div className="flex gap-2 flex-wrap mt-2">
                    <h2 className="font-bold">Tags: </h2>
                    {tag1 && <span className="text-green-500 bg-gray-100 font-semibold p-1 rounded-2xl">#{tag1}</span>}
                    {tag2 && <span className="text-green-500 bg-gray-100 font-semibold p-1 rounded-2xl">#{tag2}</span>}
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4 mt-3">
                    <p className="flex items-center gap-2 text-sm">
                        <GrLocation /> {`Year of Publishing: ${yearOfPublishing}`}
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                        <IoPeople /> {`Publisher: ${publisher}`}
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                        <PiNotepadDuotone /> {`Pages: ${totalPages}`}
                    </p>
                </div>
                <hr className="my-3" />
                <div className="flex flex-wrap gap-3 items-center">
                    {category && (
                        <span className="text-green-700 bg-green-200 font-semibold p-1 px-3 rounded-2xl">
                            Category: {category}
                        </span>
                    )}
                    {rating && (
                        <span className="text-sky-700 bg-sky-200 font-semibold p-1 px-3 rounded-2xl">
                            Rating: {rating}
                        </span>
                    )}
                    <Link to={`/book/${bookId}`}>
                        <button className="text-green-700 bg-green-200 font-semibold p-1 px-3 rounded-2xl">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SelectedList;
