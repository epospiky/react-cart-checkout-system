import React from 'react'

const ItemsList = ({item}) => {
    const shortDesc = item.description.substring(0, 100) + " ...";
    return (
        <li className="inline-block w-1/5 px-4 my-6 h-52 ">
            <span className="block h-2/3">
                <img src={item.image} alt={item.title} className="h-full w-full"/>
            </span>
            <span className="block h-1/3">
                <h4 className="text-lg text-gray-700">{item.title}</h4>
                <span className="block">{shortDesc}</span>

                <span className="px-4 inline-block flex justify-between">
                    <span className="inline-block text-xl font-bold">${item.price}</span>
                    <button className="py-2 px-3 bg-green-400 inline-block rounded-md focus:outline-none focus:border-none" type="button">Add to cart</button>
                </span>
            </span>
        </li>
    )
}

export default ItemsList
