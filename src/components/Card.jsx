import React, { useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

function Card()  {
    const [val, setVal] = useState(false)
    return (
        <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
          <div className="relative w-60 h-32 bg-zinc-500 rounded-md flex overflow-hidden">
            
            {/* First Image */}
            <img
              className={`shrink-0 w-full h-full object-cover transition-transform duration-500 ${val ? "-translate-x-[100%]" : "translate-x-[0%]"}`}
              src="https://images.unsplash.com/photo-1742943679521-f4736500a471?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
    
            {/* Second Image */}
            <img
              className={`shrink-0 w-full h-full object-cover transition-transform duration-500 ${val ? "-translate-x-[100%]" : "translate-x-[0%]"}`}
              src="https://images.unsplash.com/photo-1682887298743-7da8b720d403?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
    
            {/* Button */}
            <span
              onClick={() => setVal(!val)}
              className="w-8 h-8 flex items-center justify-center bg-[#dadada7b] rounded-full absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%] cursor-pointer"
            >
              <FaLongArrowAltRight size={".7em"} />
            </span>
          </div>
        </div>
      );
    }
  
export default Card
