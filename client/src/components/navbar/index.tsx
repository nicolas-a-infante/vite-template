
import { FC } from "react";
import { Outlet, Link } from "react-router-dom";

const NavBar : FC = () => {

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Go Home</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default NavBar;