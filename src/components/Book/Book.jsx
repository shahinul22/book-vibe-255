import React from 'react';
import { TiStarOutline } from "react-icons/ti";

import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, bookName, author, tags, category, rating, image } = book;
    const [tag1, tag2] = tags;
    return (
        <div className="card bg-base-100  shadow-xl">
            <Link to={`/book/:${bookId}`}> 
                <figure className="px-10 pt-10">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>

                <div className="card-body ">
                    <div className=' flex gap-3 '>
                        <h2 className=' text-green-500 bg-gray-200 font-semibold   p-2   rounded-2xl'>{tag1}</h2>
                        <h2 className=' text-green-500 bg-gray-200 font-semibold   p-2  rounded-2xl'>{tag2}</h2>
                    </div>
                    <div>
                        <h2 className="card-title font-bold">{bookName}</h2>
                        <p className=' font-semibold'> By: {author}</p>
                    </div>
                    <hr />
                    <div className=' flex justify-between items-center text-[16px] font-normal '>
                        <h2>{category}</h2>
                        <h2 className=' flex gap-2 items-center'>{rating} <TiStarOutline /></h2>
                    </div>

                </div>
            </Link>
        </div>
    );
};

export default Book;