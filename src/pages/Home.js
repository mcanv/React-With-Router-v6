import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
            <h3>Homepage</h3>
            <Link to="/about">
                Go to about page
            </Link>
        </>
    )
}