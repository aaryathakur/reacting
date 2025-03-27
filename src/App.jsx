import React, { useState } from 'react'

function App() {
  const [val, setVal] = useState({name: " harsh" , age:24});
  return (
    <div>
      <button onClick={async () => {
        await setVal({...val, gender: "male" });
        await console.log(val);
      }} >click</button>
    </div>

  )
    
}

export default App