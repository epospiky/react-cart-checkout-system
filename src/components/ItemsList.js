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

    
  const {addToCart, cart} = useContext(GlobalContext);
    
    return (
        <div className="App">
        <ul className="w-full px-8">
        {
            
           items.map(item=>( <Item key={item.id} item={item}  />))

          } 
        </ul>  
      </div>
        
    )
}

export default ItemsList
