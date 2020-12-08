
import React, { useState } from 'react';
import './App.css';
import ItemsList from './components/ItemsList';

function App() {     
  const [items, setItems] = useState([]);

  const req =  fetch(`https://fakestoreapi.com/products`).then(res=>res.json());
  req.then((data) => {setItems(data)})
  
  return (
    <div className="App">
      <div className="grid grid-cols-4 gap-8">
      {
       items.map(item => (<ul><ItemsList key={item.id}  item={item}/></ul>)  )
     }
      </div>
  
    </div>
  );
}

export default App;
