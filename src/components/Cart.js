import React ,{useContext, useState} from 'react';
import {GlobalContext} from '../context/GlobalState';

const Cart = () => {
    const [options, setOptions] = useState();

    const {cart} = useContext(GlobalContext);
    return (
        <div className="flex justify-center px-20">
            <table className="min-w-full table-auto">
              <thead className="justify-between">
                  <tr className="bg-gray-800 text-gray-300">
                      <th className="px-16 py-2">Item</th>
                      <th className="px-16 py-2">Quantity</th>
                      <th className="px-16 py-2">Unit Price</th>
                      <th className="px-16 py-2">Subtotal</th>
                  </tr>
              </thead>
              <tbody class="bg-gray-200">
                {cart.map(cartItem =>(
                  <tr key={cartItem.id} class="bg-white border-4 border-gray-200 ">
                      <td className="py-8 h-full">
                          <span className="h-full inline-block">
                              <img className="h-52 w-auto" src={cartItem.image}/>
                          </span>
                          {(<span>{cartItem.title}</span>)
                          /* ()=>{ const itemTitle = cartItem.title
                          console.log('itemTitle');
                          if (itemTitle.length > 100) {
                              return (<span>{cartItem.title.substring(0, 100) + " ..."}</span>)
                          } else {
                              return (<span>{cartItem.title}</span>)
                          }} */}
                      </td>
                      <td className="text-center py-8">
                      <select value={options} onChange={(e)=>setOptions(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                      </td>
                      <td className="text-center py-8">{cartItem.price}</td>
                        <td className="text-center py-8">{options * cartItem.price}</td>
                  </tr>
            ))}
              </tbody>
            </table>

     
        </div>
    )
}
export default Cart;