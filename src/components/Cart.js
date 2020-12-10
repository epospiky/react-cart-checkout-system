import React ,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
const Cart = () => {
    const {cart} = useContext(GlobalContext);   
    return (
        <table>
              <thead>
                  <tr>
                      <th >Item</th>
                      <th>Quantity</th>
                      <th>Unit Price</th>
                      <th>Subtotal</th>
                  </tr>
              </thead>
            {cart.map(cartItem =>(
              <tbody>
                  <tr>
                      <td><span><img src={cartItem.image}/></span><span>{}</span></td>
                      <td>{}</td>
                      <td>{cartItem.price}</td>
                      <td></td>
                  </tr>
              </tbody>
            ))}
        </table>
    )
}
export default Cart