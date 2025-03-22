import React from 'react'
function Card3() {
    const data = [
        {name: "Jhol", description:"The Jhol character in the game that will be displayed"},
        {name: "tere naam", description:"The tere namm character"}
    ];
    const handleClickDownload = () => {alert("hey")};
  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col justify-center gap-4 items-center'>
        {data.map((item , index)  => (
            <div className='w-80 px-3 py-2 bg-zinc-100 rounded-md'>
            <h3 className='font-semibold text-xl'>{item.name}</h3>
            <p className='text-xs mg-2'>{item.description}</p>
            <button onMouseOver={handleClickDownload} className='px-2 py-1 bg-blue-400 texxt-xs font-semibold text-zinc-100 mt-3 rounded'>Download Now</button>
            {/* <button onClick={() => {alert("hey");}} className='px-2 py-1 bg-blue-400 texxt-xs font-semibold text-zinc-100 mt-3 rounded'>Download Now</button> */}
        </div>
        ))}
        
      
    </div>
  )
}

export default Card3
