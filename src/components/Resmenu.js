import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';

import { useParams } from 'react-router-dom';
import {useResmenu} from '../utils/useResmenu'
import ResList from './ResList';


const Resmenu = () => {
const {resid}=useParams();
const [showIndex,setshowIndex]=useState(null);
// console.log(param)
    // useEffect(()=>{
    //     fetchData();
    // },[])

    // const fetchData   =  async()=>{
    //     const data=  await fetch( "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId="+resid)
    //     const json = await data.json();
    //     console.log(json.data)
    //     setResmenu(json.data);
    // }
  const Resmenu  =useResmenu(resid);
  console.log(Resmenu)

    if(Resmenu === null ){
        return <Shimmer/>
    }
    
    // const{itemCards} =Resmenu.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ;
    // console.log(itemCards);


    let itemCards =Resmenu.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    console.log(itemCards);

     itemCards = itemCards?.filter((e) => e.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(itemCards);

    const {name,cuisines,avgRating} =Resmenu.cards[2]?.card.card.info;

  return  (
   <>
   <section className='text-center'>
   <h1 className='text-xl mb-4'>dfsdf Wok</h1>
   <ul>
    { <li>{name}</li> }
    <li>{cuisines.join(",")}</li>
    <li>{avgRating}</li> 
    <li>chinese</li>
    {
        itemCards.map((item,index)=>(
          <div key={item.card.card.title} className='mt-4' >
               <ResList 
               showItems={index===showIndex&&true} 
              //  setshowIndex={()=>setshowIndex(index)} 
              setshowIndex={()=>setshowIndex(index === showIndex ? null : index)}
                data={item}/>
               </div>
           
        ))
    }


   
   
   
   </ul>
   </section>
  
   </>
  )
}

export default Resmenu
