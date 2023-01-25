import axios from 'axios';
import {useState}from 'react'
import "./Login.css"
const initialData={
    email:"",
    password:""
}
export default function () {
    const [loginData,setLoginData]=useState(initialData);

    const handleInputChange =(e)=>{
        const name=e.target.name;
        const value =e.target.value;
    
        setLoginData({...loginData,[name]:value})
    }

    const handleSubmit =async(e)=>{
        e.preventDefulte();
        const res = await axios.get("http://localhost:4000/api/login/get?email="+loginData.email);
        if(res.data.password===loginData.password){
            if(res.data.role==="admin"){
                window.location.assign("http://localhost:3000/admin")
            }else{
                alert("You are not allowed to login from here")
            }
        }else{
            alert("password is not matched")
        }
    }


  return (
    <div>
        <h1 className='title'>Admin Login</h1>
        <form className='inputLogin'>
            <label>User email</label>
            <input type="email"  name='email' className='loginInputField' value={loginData.email} onChange={handleInputChange}/>
            <label>User Password</label>
            <input type="password" className='loginInputField' name='userPassword' value={loginData.Password} onChange={handleInputChange}/>
            <button type='submit' className='btn-submit' onClick={handleSubmit}>SUBMIT</button>
        </form>
    </div>
  )
}
