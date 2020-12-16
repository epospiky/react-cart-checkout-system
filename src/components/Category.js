import React, {useState} from 'react';
import ItemsList from './ItemsList';

const Category = ({checkId}) => {
    const [activeCat, setActiveCat] = useState("false");
    const handleCategory =(e)=>{
        e.preventDefault()
        setActiveCat(!activeCat)
    }
    return (
        <div className="relative ml-4 mr-auto pr-auto  bg-gray-300 w-48 py-2">
            <div onClick={handleCategory} className="cursor-pointer"><span className="pl-4 "> Select Category</span><span className="fa fa-chevron-down float-right pr-1"></span></div>
            <ul className={`absolute bg-gray-300 w-full ${activeCat?"hidden": null}`}>
                <li id="men clothing" onClick={handleCategory, checkId} className="pl-4 py-1 hover:bg-gray-100 cursor-pointer">Men Clothing</li>
                <li id="electronics" onClick={handleCategory, checkId} className="pl-4 py-1 hover:bg-gray-100 cursor-pointer">Electronics</li>
                <li id="jewelery" onClick={handleCategory, checkId} className="pl-4 py-1 hover:bg-gray-100 cursor-pointer">Jewelery</li>
                <li id="women Clothing" onClick={handleCategory,checkId} className="pl-4 py-1 hover:bg-gray-100 cursor-pointer">Women Clothing</li>
            </ul>
        </div>
    )
}

export default Category

