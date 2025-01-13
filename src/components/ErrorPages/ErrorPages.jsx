import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className=" text-center min-h-screen mt-20">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <button className=" bg-gray-700 text-white border-2 rounded-2xl p-3"> 
                <Link to='/'>Back to Home</Link> </button>
        </div>
    );
}