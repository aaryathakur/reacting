import React from "react";

function Card2() {
  const data = [
    
    {
      image:
        "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      name: "Amazon Basics",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, iusto?",
        instock:true
    },
    {
      image:
        "https://images.unsplash.com/photo-1641390885931-e0fb099c61c8?q=80&w=654&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Daily Objects",
      description: "Lorem ipsum dolor sit",
      instock:false
    },
    {
      image:
        "https://images.unsplash.com/photo-1598649999298-3812df10c9ce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Apple",
      description: "Lorem ipsum dolor",
      instock:false
    },
  ];
  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
        {data.map((elem, index) => (
          <div key= {index} className="w-52 bg-zinc-100 rounded-md overflow-hidden">
            <div className="w-full h-32 bg-zinc-300 ">
              <img
                className="w-full h-full object-cover"
                src={elem.image}
                alt=""
              />
            </div>
            <div className="w-full px-3 py-4">
              <h2 className="font-semibold">{elem.name}</h2>
              <p className="text-xs mt-5">
                {elem.description}
              </p>
              <button
  className={`px-4 py-1 ${elem.instock ? 'bg-blue-600' : 'bg-red-600'} text-xs rounded text-blue-100 mt-3`}
>{elem.instock ? "In Stock" : "Out of Stock"}
</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card2;
