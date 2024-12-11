import React from 'react'
import React, { useEffect, useState } from 'react'

 export const useResmenu = (resid) => {
    const [Resmenu,setResmenu] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData   =  async()=>{
        const data=  await fetch( "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId="+resid)
        const json = await data.json();
        console.log(json.data)
        setResmenu(json.data);
    }
  return Resmenu;
}


