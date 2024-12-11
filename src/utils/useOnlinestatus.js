import React, { useEffect, useState } from 'react'

const useOnlinestatus = () => {

    const [Status, setStatus]=useState(true);

    useEffect(()=>{

        CheckStatus();

    },[])

    const CheckStatus =()=>{
        window.addEventListener('online', ()=>{
            setStatus(true)
        });

        window.addEventListener('offline', ()=>{
            setStatus(false)
        });
    }
  return Status
}

export default useOnlinestatus
