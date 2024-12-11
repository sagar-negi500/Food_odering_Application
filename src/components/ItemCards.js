import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemCards = ({ items }) => {
  console.log(items); // Logs the items array to inspect its structure

  const dispatch = useDispatch();
  const addCard =(item)=>{
// console.log(items)
dispatch(addItem(item));
  }

  return (
    <>
      {items.map((item) => (
        <div className='flex justify-between'>
        <div className='border-b-2 mb-3 p-2' key={item.card.info.id}>
          {item.card.info.name}
        </div>
        
          <div><button onClick={()=>addCard(item)} className='bg-black text-white p-4 m-2'>Add </button></div>
          </div>
      ))}
    </>
  );
};

export default ItemCards;
