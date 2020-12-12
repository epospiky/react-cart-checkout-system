import React, { useContext } from 'react'
import {router} from 'react-router-dom';

import {Link} from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState';
const Header = () => {
    const {cart} = useContext(GlobalContext)
    return (
        <div className="relative mb-16">
        <header className="fixed top-0 z-10 px-20 bg-gray-700 w-full ">
            <ul className=" flex justify-between py-3 text-gray-200">
                <li style={{fontFamily: 'Croissant One'}}>
                    <Link to="/"><h1 className="font-bold text-2xl">U-Mall</h1></Link>
                </li>
                <li className=" text-3xl">
    <Link to="/cart"><span className="fa fa-shopping-cart relative"><sup className="text-sm bg-black text-white px-2 py rounded-full  absolute -right-3">{cart.length}</sup></span></Link>
                </li>
            </ul>
        </header>
        </div>
    )
}
export default Header;
