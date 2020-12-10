import React from 'react'
import {router} from 'react-router-dom';

import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link to="/">U-Mall</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
            </ul>
        </header>
    )
}
export default Header;
