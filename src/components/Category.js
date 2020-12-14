import React from 'react'

const Category = () => {
    const handleCategory =()=>{

    }
    return (
        <div className="relative ml-4 mr-auto pr-auto  bg-gray-300 w-48 py-2">
            <div onClick={handleCategory} className="cursor-pointer"><span className="pl-4 "> Select Category</span><span className="fa fa-chevron-down float-right pr-1"></span></div>
            <ul className=" hidden">
                <li className="pl-4 py-1 hover:bg-gray-100 cursor-pointer">Men Clothing</li>
                <li className="pl-4 py-1 hover:bg-gray-100 cursor-pointer">Jewelery</li>
                <li className="pl-4 py-1 hover:bg-gray-100 cursor-pointer">Electronics</li>
                <li className="pl-4 py-1 hover:bg-gray-100 cursor-pointer">Jewelery</li>
                <li className="pl-4 py-1 hover:bg-gray-100 cursor-pointer">Women Clothing</li>
            </ul>
        </div>
    )
}

export default Category

