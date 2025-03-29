import React from "react";
import Card from "./components/Card";  // Import the Card component

function App() {
  return (
    <>
    <Card text="Know More" color="bg-blue-600"/>   {/* Render the Card component */}
    <Card  text="Download" color="bg-red-700" /> 
    </>
  );
}

export default App;
