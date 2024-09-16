import React, { useState } from 'react'

export default function Form() {
    let [mail,setEmail] = useState('');
    let [password,setPass] = useState('');
    let [category,setCategory] = useState('');

    const[mailerr,setEmailErr] = useState('');
    const[passworderr,setPassErr] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!mail){
          console.log("Mail Required")
          setEmailErr("Email required")
        }      
        else{
            setEmailErr("")
        }
         if(!password){
            console.log("Password Required")
            setPassErr("Password required")
        }
        else{
            setEmailErr("")
        }
        
        if (mail !== "" && password !== ""){
            console.log("Form Submitted")
            
            setEmailErr("")
            setPassErr("")

        }
        else if(!mail.includes("@"))
            {
                setEmailErr("Invalid Email")
            }
        


      
    }

  return (
    <div>

        <h1 style={{margin:"25px"}}>Form</h1>                    

        <form action="" style={{margin:"10px"}} onSubmit={(e)=> handleSubmit(e)}>
            <label htmlFor="" style={{display:"block",margin:"15px"}}>Enter Your Email :- </label> 
            <input type="text" placeholder='Email' style={{padding:"10px",display:"block",margin:"15px"}} onChange={(e) => setEmail(e.target.value)}/> 
            <span style={{color:"red",display:"block",margin:"15px"}}>{mailerr}</span>                                           

            <label htmlFor="" style={{display:"block",margin:"15px"}}>Enter Your Password :- </label> 
            <input type="text" placeholder='password' style={{padding:"10px",display:"block",margin:"15px"}} onChange={(e) => setPass(e.target.value)}/> 
            <span style={{color:"red",display:"block",margin:"15px"}}>{passworderr}</span>                                        
           
            <select onSubmit={(e)=>setCategory(e.target.value)} style={{padding:"10px" , display:"block",margin:"15px",marginTop:"30px"}}>
                <option value="">Category</option>
                <option value="electric">Electric</option>
                <option value="clothing">Clothing</option>
            </select>
            {
                category == "electric" && <input type="text" placeholder='Enter Warranty'/> 
            }
            {
                category == "clothing" && <input type="text" placeholder='Enter return period'/> 
            }


            <button type='submit' style={{margin:"15px"}}>
                submit
            </button> 
        </form>
    </div>
  )
}
