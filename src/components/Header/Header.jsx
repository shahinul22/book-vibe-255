import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const links = (
        <>
            <li ><NavLink to='/'>Home</NavLink></li>
            <li ><NavLink to='/listedBooks'>Listed Books</NavLink></li>
            <li ><NavLink to='/pageToRead'>Pages to Read</NavLink></li>
            <li ><NavLink to='/appliedJobs'>Applied Jobs</NavLink></li>
            <li ><NavLink to='/blogs'>Blogs</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 mx-auto">
            {/* Navbar Start */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow border-2 "
                    >
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold">Book Vibe</a>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex gap-3">
                <ul className="menu menu-horizontal px-1  ">{links}</ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end flex items-center gap-2">
                <div>
                    <a href="">
                        <button className="btn btn-primary  text-white bg-gradient-to-r from-[#59C6D2] to-[#0ED5EA] hover:from-[#38B2AC] hover:to-[#319795] hover:text-gray-700">
                            Sign In
                        </button>
                    </a>
                </div>
                <div>
                    <a href="">
                        <button className="btn btn-primary text-white bg-gradient-to-r from-[#82C277] to-[#23BE0A] hover:from-[#5A9A5A] hover:to-[#1D7508] hover:text-gray-700">
                            Sign Up
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
