import React, {useState,useEffect, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import Category from './Category';
import Item from './Item';

const ItemsList = ({item}) => {
    const [items, setItems] = useState([]);
    const [catId, setCatId] = useState([])
    
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
       // console.log(items)
        var gottenId =""
 
        
        function checkId(e){
        // return (e.target.id)
       gottenId = e.target.id;
        setCatId(gottenId)
        //console.log(catId)
        }
         //checkId() 

        
        //console.log(catId)
        const filtered = items.filter(item => item.category === `${catId}`)
    return (
        <div style={{fontFamily: "'Montserrat', 'sans-serif'"}} className="app">
          <Category checkId={checkId}/>
        <ul className="w-full px-8">
        {
            catId.length>1?filtered.map(item=>( <Item key={item.id} item={item}  />)) : items.map(item=>( <Item key={item.id} item={item}  />)) 
          } 
        </ul>  
      </div>
        
    )
}

export default ItemsList
