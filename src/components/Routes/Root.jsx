import React from 'react';
import Header from './../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './../Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className=' max-w-7xl mx-auto flex flex-col  '>
                <Header />
                <main className=' flex-grow'>
                    <Outlet></Outlet>
                </main>
            </div>
            {/* Footer */}
            <Footer></Footer>

        </div>
    );
};

export default Root;