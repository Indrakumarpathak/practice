// import { useState } from "react";


// export default function About(){
//   const [userName,setUserName]= useState("John");
//   const [userAge,setUserAge]= useState(24)
//   const [userCity,setUserCity]= useState("indore");
//   const [userLive,setUserLive]= useState(true);
//   const [ count, setCount] = useState(0)

//   let name = "smith";
//   const changeName = () =>{
//     name = "john smith";
//     console.log(name)

//     setUserName ("hello john smith")

    
//   }
//   const increment = () =>{
//     setCount(count + 1)

//   }

// const decrement = () =>{
//   setCount(count - 1)

// }

  

//   return (
//   <>
//     <h1>{userName}</h1>
//     <h2>{userAge}</h2>
//     <h2>{userCity}</h2>
//     <h2>{userLive}</h2>
//     <h2>{name}</h2>
//     <button onClick={changeName}>Change</button>
//     <button onClick={increment}>Change</button>
//     <samp>{count}</samp>
//     <button onClick={decrement}>Change</button>
//   </>

//   )

// }

import React, { useState } from 'react';



function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    number:   '' ,
    state:   '',
    city:   '',

  });

  const [pass,setPass] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('From Data:', formData);
  };

  return (
    <>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <label>
         Username
        <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <br/>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <br/>
        <label>
          Number:
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
        </label>
        <br />
        <br/>
        <label>
          State:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </label>
        <br/>
        <br/>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </label>
        <br/>
        <br/>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br/>
        <br/>
        
        <button type="submit">Sign Up</button>
        
      </form>
      {/* <p>the password is : {pass}</p> */}


    </>
  
)}

export default LoginForm;
