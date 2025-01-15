import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root from './components/Routes/Root.jsx';
import ErrorPage from './components/ErrorPages/ErrorPages.jsx';
import Home from './components/Home/Home.jsx';
import Books from './components/Books/Books.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PageToRead from './components/PageToRead/PageToRead';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import LogIn from './components/LogIN/LogIn';
import SignUp from './components/SignUp/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../books.json') // Correct path for public folder
      },
      {
        path:'/listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('../books.json') // Correct path for public folder
      },
      {
        path:'/pageToRead',
        element: <PageToRead></PageToRead>,
        loader: () => fetch('../books.json')
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/logIn',
        element: <LogIn></LogIn>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
