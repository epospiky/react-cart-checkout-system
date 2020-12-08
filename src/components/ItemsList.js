import React from 'react'

const ItemsList = ({item}) => {
    const shortDesc = item.description.substring(0, 100) + " ...";
    return (
        <li className="block">
            <img src={item.image} alt={item.title} height="100px"/>
            <h4 className="text-lg text-gray-700">{item.title}</h4>
            <span className="block">{shortDesc}</span>

            <span className="px-4 inline-block flex justify-between">
            <span className="inline-block text-xl font-bold">${item.price}</span>
            <button className="py-2 px-3 bg-green-400 inline-block rounded-md focus:outline-none focus:border-none" type="button">Add to cart</button>
            </span>
        </li>
    )
}

export default ItemsList
