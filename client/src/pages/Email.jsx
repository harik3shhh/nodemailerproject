import React, { useState } from 'react'
import { toast } from "react-toastify";
import Loading from '../Components/Loading';


const Email = () => {
    const [user, setUser] = useState({
        email: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInput =(e)=>{
        // console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        // alert(user);
        // console.log(user);
        
        setIsSubmitting(true);
        try{
            
        const url = "http://localhost:8000/api/form";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if(response.ok){
            setUser({ email:""});
            toast.success("Successfully Sent ");
            setIsSubmitting(false);
        }else{
            toast.error("Failed to Send");
                console.log("Failed to Send");
                setIsSubmitting(false);
        }

    }catch (error) {
        console.log(error);
        setIsSubmitting(false);
      }
    };
   

  return (
    <>
        <form onSubmit={handleSubmit}>

    <div className="container">
        <div className="back">
            <label htmlFor="email">Enter Your Email Address Below</label>
            <input type="email" name="email" placeholder="example@gmail.com" 
            value={user.email} onChange={handleInput}
            />
        </div>

        <div className="btn">
        {isSubmitting ? (
          <Loading />
          ):(
            <button type="submit">Send</button>
          )}
        </div>
    </div>


        </form>
    </>
  )
}

export default Email
