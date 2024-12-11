import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorElemet = () => {
    const error=useRouteError();

    const { status } = error
    console.log(error);
  return (
    <div>
      tisis error page


      <div>{status}</div>
    </div>
    
  )
}

export default ErrorElemet
