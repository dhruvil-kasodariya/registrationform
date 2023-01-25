import { useState } from "react";
import axios from "axios";
import "./RegistrationForm.css"

  const initialData ={
    fname:"",
    lname:"",
    email:"",
    userPassword:""
  }
function RegistrationForm({Title,type}) {
  const [formData,setFormData]=useState(initialData)

  const handleInputChange=async(e)=>{
    const name=e.target.name;
    const value =e.target.value;

    setFormData({...formData,[name]:value})
  }

  const handleFormSubmit = async(e)=>{
    e.preventDefaut();
    const userData ={   
        fname:formData.fname,
        lname:formData.lname,
        email:formData.email,
        password:formData.userPassword, 
        role: toString(type)==="admin"?"admin":"customer" ,   
    }
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const mail =userData.email;
    if(!userData.fname || !userData.lname || !userData.email || !userData.password || !mail.valueOf.match(validRegex)){
        if(!userData.fname){
            alert("Enter your First Name");
        }
        if(!userData.lname){
            alert("Enter your last Name");
        }
        if(!userData.email || !mail.valueOf.match(validRegex) ){
            if(!userData.email){
                alert("Enter Email Address")
            }
            if(!mail.valueOf.match(validRegex)){
                alert("Enter Valid Email Address")
            }
        }
        if(!userData.password){
            alert("Enter your password");
        }

    }else{
    axios.post("http://localhodt:4000/api/registration/post",userData).then(setFormData(initialData))
    }
  }

  return (
    <div>
        <h1 className="title">{Title}</h1>
        <form  className="inputForm">
            <label>First Name</label>
            <input type="text"  name='fname' value={formData.fname} onChange={handleInputChange} className="inputField"/>
            <label>Last Name</label>
            <input type="text"  name='lname' value={formData.lname} onChange={handleInputChange} className="inputField"/>
            <label>Email</label>
            <input type="email"  name='email' value={formData.email} onChange={handleInputChange} className="inputField"/>
            <label>Password</label>
            <input type="password" name='userPassword' value={formData.userPassword} onChange={handleInputChange} className="inputField"/>
            <button type='submit' onClick={handleFormSubmit} className="btn-submit"> SUBMIT </button>
        </form>
    </div>
  )
}

export default RegistrationForm