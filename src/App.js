
import React, { useState } from 'react';
import './App.css';
import ItemsList from './components/ItemsList';

function App() {     
  const [items, setItems] = useState([]);

  const req =  fetch(`https://fakestoreapi.com/products`).then(res=>res.json());
  req.then((data) => {setItems(data)})
  
  return (
    <div className="App">
      <ul className="w-full px-8">
      {
       items.map(item => (<ItemsList key={item.id}  item={item}/>)  )
      }
      </ul>  
    </div>
  );
}

export default App;
