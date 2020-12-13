import React, {useState,useEffect, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import Item from './Item';

const ItemsList = ({item}) => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {    
      fetch(`https://fakestoreapi.com/products`).then(res=>res.json()).then((data) => {
      
      if (!data.errors) {
        setItems(data)
      }else{
        setItems([]);
      }
    })
    }, [])
/* 
   const shuffle = (array) => {
      array.sort(() => Math.random() - 0.5);
    } */
//  const {addToCart, cart} = useContext(GlobalContext);
    console.log(items)
    return (
        <div style={{fontFamily: "'Montserrat', 'sans-serif'"}} className="App">
        <ul className="w-full px-8">
        {
            
            items.map(item=>( <Item key={item.id} item={item}  />))

          } 
        </ul>  
      </div>
        
    )
}

export default ItemsList
