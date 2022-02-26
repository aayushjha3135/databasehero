import React, { useState, useEffect } from "react";
import Axios from 'axios'
import './App.css';


function App() {
 const [productName, setProductName] = useState("Apple");
 const [star, setStar] = useState(0);
 const [price, setPrice] = useState(0);

 const [productList, setProductList]= useState([]) 

useEffect(()=> {
Axios.get('http://localhost:3001/read').then((response)=>{
  setProductList(response.data);
});
},[])

 const addToList = () => {
   Axios.post("http://localhost:3001/insert",{
     productName:productName, 
     star: star, 
     price:price
    });
 };
 
  return(
      <form >
        <fieldset>
          <label>
            <p>Product</p>
            <input 
            
            onChange={(event) =>{setProductName(event.target.value);
            }}
             />
          </label>
          <label >
            <p>Star</p>
            <input 
            onChange={(event) =>{setStar(event.target.value);
            }} 
            />
          </label>
          <label>
            <p>Price</p>
            <input 
            onChange={(event) =>{setPrice(event.target.value);
            }}
            />
          </label>
        </fieldset>
        <button  onClick={addToList}>Submit</button>
        <h2>Here are the Data Stored</h2>

        {productList.map((val,key)=>{
          return <div><h3> {val.productName}</h3>
          <h3>{val.star}</h3>
          <h3>{val.price}</h3>
          </div>
        })}
      </form>
   
  );
}

export default App;