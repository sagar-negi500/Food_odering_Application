import React from 'react'
import ItemCards from './ItemCards'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice'
// import { clearCart } from '../utils/cartSlice'

const Cart = () => {
    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems)
    const dispatch=useDispatch();
    const emptyCart =()=>{
        dispatch(clearCart())
    }
  return (
    <div>
        

        <div className='w-2/4 m-auto mt-10'>
        <div>
            <button onClick={emptyCart} className='text-blue-500 bg-black p-4 m-3'>Clear Cart</button>
        </div>
        <ItemCards items={cartItems}/>
        </div>
     
      {/* <ItemCards items={data.card.card.itemCards}/> */}
    </div>
  )
}

export default Cart
