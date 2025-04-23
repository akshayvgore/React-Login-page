import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
    const[user,setUser]=useState('');
    const[Password,SetPassword]=useState('');
    const navigate=useNavigate();
    

    const handleLogin=(e)=>{
        e.preventDefault();
        if(user==='Akshay'&& Password==='1234'){
            setIsAuth(true)
            navigate('/dashboard')
        }else{
            alert('Invalid credentials')
        }
    };
    return(
        <div style={{padding:20,}} className="bg-blue-300 w-100 text-red-800"> 
            <h2> 🔏 Login</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Enter Your Name" className="form-control" value={user} onChange={(e)=> setUser(e.target.value)}  required/>
                <br /><br />

                <input type="password" placeholder="Enter Your password" className="form-control" value={Password} onChange={(e)=>SetPassword(e.target.value)} required/>
                <br /><br />
                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    );

};

export default Login;