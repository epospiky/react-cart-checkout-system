import React, {useState,useEffect, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import Category from './Category';
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
        
        const checkId = (e)=>{
         const gottenId = e.target.id   
         //console.log(gottenId)
        }
        console.log(checkId.gottenId)
        const filtered = items.filter(item => item.category === `${checkId.gottenId}`)
    return (
        <div style={{fontFamily: "'Montserrat', 'sans-serif'"}} className="app">
          <Category checkId={checkId}/>
        <ul className="w-full px-8">
        {
            items?filtered.map(item=>( <Item key={item.id} item={item}  />)) : ""
          } 
        </ul>  
      </div>
        
    )
}

export default ItemsList
