import React, { useState } from 'react'
import ItemCards from './ItemCards';

const ResList = ({data ,showItems,setshowIndex}) => {
    console.log(data);
    // const [showItems,setShowItems]=useState(false)
  // const handelClick =()=>{
    
  //   // setshowIndex();
  //   setshowIndex(prevState => (prevState === data.index ? false : data.index));
  // }

  const handelClick = () => {
    setshowIndex(prevIndex => (prevIndex === index ? null : index));
};

 

  return (
   <>
   <div onClick={handelClick} className='bg-gray-600 mb-2 p-4 mx-auto w-[50%]'>
   <div  className='justify-between   flex '>
    <div>{data.card.card.title}</div>
 
    <div>⬇</div>
    
 </div>
 <div>{showItems && <ItemCards items={data.card.card.itemCards}/>}
 
  </div>

 
   </div>
 

   </>
  )
}

export default ResList
