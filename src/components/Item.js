import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

const Item = ({item}) => {

    const {addToCart, cart} = useContext(GlobalContext);    
    const addedToCart = cart.find(i =>i.id === item.id);
    const disableButton = addedToCart? true:false
    const disableButtonStyle = addedToCart? {opacity:"0.3", color:"red", cursor:"not-allowed", fontFamily: "Arial"}: {};
    //const disabledStyle = disableButton? : '';
    const shortDesc = item.description.substring(0, 100) + " ..."; 

    return (
                <li className="inline-block w-1/5 px-4 my-6 h-52 ">
                    <span className="block h-2/3">
                        <img src={item.image} alt={item.title} className="h-full w-full"/>
                    </span>
                    <span className="block h-1/3">
                        <h4 className="text-base tracking-wider font-semibold text-gray-700">{item.title}</h4>
                        <span className="block text-sm tracking-wider leading-relaxed text-gray-600">{shortDesc}</span>

                        <span className=" text-sm px-4 inline-block flex justify-between">
                            <span className="inline-block mt-auto text-xl font-bold">${item.price}</span>
                            <button disabled={disableButton}  style={disableButtonStyle} onClick={() =>addToCart(item)} className="disabled:opacity-50 py-2 px-3 bg-green-400 inline-block rounded-md focus:outline-none focus:border-none" type="button">Add to cart</button>
                        </span>
                    </span> 
                </li>
    )
}

export default Item;
