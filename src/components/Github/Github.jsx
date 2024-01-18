import React, { useState } from "react";
import { useEffect } from "react";

export default function (){
    const [data, setData] = useState([])
    useEffect(() => {
      fetch('http://api.github.com/users/udayshekar26')
      .then(response => response.json())
      .then(data =>{
        console.log(data);
        setData(data)
      })
    }, [])
    
    return(
        <div className="text-centre mb-4 bg-gray-600 text-white p-4 text-3xl">Github followers:{data.followers} 
        <img src={data.avatar_url} alt="Git Picture" srcset="" /></div>
    )
}