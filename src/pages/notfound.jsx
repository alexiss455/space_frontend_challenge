import React from 'react'
import { useLocation } from 'react-router';

export default function notfound() {

  let location = useLocation;
    console.log(location.pathname)
      return (
        <div className='bg-black text-white text-9xl font-black absolute w-[100vw] h-[100vh] flex items-center justify-center top-0 -z-10 font-san2'>
          <h3>
            No match for {location.pathname}
          </h3>
        </div>
      );
    }

