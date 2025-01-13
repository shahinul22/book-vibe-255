import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div
            className="mx-3 lg:mx-16 mt-10 rounded-3xl group bg-[url('https://i.ibb.co/SxFcnxy/development-with-abstract-background.jpg')] 
                 bg-cover bg-center text-white transition-all duration-500 ease-in-out hover:scale-105"
        >
            <div className="relative h-[70vh] md:h-[60vh] lg:h-[65vh]">
                <div className="absolute inset-0 bg-black/50 flex flex-col lg:flex-row items-center justify-between gap-8 rounded-3xl p-5">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Books to freshen <br /> up your bookshelf
                        </h1>
                        <Link to='/listedBooks'>
                            <button
                                className="text-lg md:text-2xl bg-green-600 text-white font-semibold py-2 px-6 
                         rounded-full hover:bg-white hover:text-green-600 
                         transition duration-300"
                            >
                                View The List
                            </button>
                        </Link>

                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <figure>
                            <img
                                className="rounded-3xl max-w-full h-auto"
                                src="https://i.ibb.co/MR1kwVd/professional-business-book-cover-23-2149490317.jpg"
                                alt="Book Cover"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
