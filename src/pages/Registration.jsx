import React, { useContext } from 'react'
import {useForm,} from "react-hook-form";
import toast from "react-hot-toast"

import { VoterContext } from '../context/VoterContext';
const Registration = () => {

    const {register,handleSubmit,formState,reset}= useForm();
    const notify =()=>toast("registration successfull");

    const {setUser}=useContext(VoterContext)

   


    const handleFormSubmit=(data ,event)=>{
        event.preventDefault();
const today= new Date ();
const dob = new Date (data.dob);
let age= today.getFullYear()- dob.getFullYear();
const monthDiff = today.getMonth()-dob.getMonth();

// Adjust age if the birthday hasn't occurred yet this year
if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  if (age < 18){
    toast.error("you must be at least 18 years old to register");
    return ;// stop form submission
  }

  const profilePictureURL = data.profilePicture[0] ? URL.createObjectURL(data.profilePicture[0]) : null;
  const idPictureURL = data.idPicture?.[0] ? URL.createObjectURL(data.idPicture[0]) : null;
setUser({
    
    fname:data.fname,

    lname:data.lname,
    mname:data.mname,
    username:data.username,
    email:data.email,
    idno:data.idno,
    phone:data.phone,
    dob: data.dob,
    profilePicture: profilePictureURL,  // Store the URL of the uploaded image
    idPicture: idPictureURL, 


    });
    

       notify();
       reset();
    }
  return (
    <div>
<h1>UserRegistration</h1>
<form onSubmit={handleSubmit(handleFormSubmit)}>
    <div>
        <label htmlFor="fname"> First Name</label>
        <input type="text"
        placeholder='First Name'
        {...register("fname",{
           required:"the first name is required" ,
           minLength:{
            value:3,
            message:"the name should contain at least three characters",
           },
           pattern:{
            value:/^[a-zA-Z]+$/,
            message:"First name should only contain letters"
           }
        })}
        />
        {formState.errors.fname && (
            <p>
                {formState.errors.fname.message}
            </p>
        )}
    </div>

    <div>
        <label htmlFor="mname">Middle Name</label>
        <input type="text"
        placeholder='Middle Name'

        {...register("mname",{
            required:"Middle name is required",
            minLength:{
                value:3,
                message:"middle name should be atleast three letters",
            },
            pattern:{
              value:/^[a-zA-Z]+$/,
              message:"middle name should only contain letters"  ,
            }

    
        })}
        
        />
        {formState.errors.mname && (
            <p>
                {formState.errors.mname.message}
            </p>
        )}
    </div>
<div>
    <label htmlFor="lname">Last Name</label>
    <input type="text" 
    placeholder='Last Name'

    {...register("lname",{
        required:"last name is required",

        minLength:{
        value:    3,
        message:"the name should be ate least three characters",
        },

        pattern:{
            value:/^[a-zA-Z]+$/,
            message:"name should only contain letters"
        }
    })}
    />
    {formState.errors.lname &&(
        <p>
            {formState.errors.lname.message}
        </p>
    )}
</div>

<div>
    <label htmlFor="username">UserName</label>
    <input type="text" 
    placeholder='UserName'

    {...register("username",{
        required:"username is required",

        minLength:{
        value:    3,
        message:"the name should be ate least three characters",
        },

        pattern:{
            value:/^[a-zA-Z]+$/,
            message:"name should only contain letters"
        }
    })}
    />
    {formState.errors.username &&(
        <p>
            {formState.errors.username.message}
        </p>
    )}
</div>
<div>
    <label htmlFor="email">Email</label>
    <input type="email"
    placeholder='email'
    {...register("email",{
        required:"the email is required",
        pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Please enter a valid email address"
          }
          
    })}
    />
    {formState.errors.email &&(
        <p>
            {formState.errors.email.message}
        </p>
    )}
</div>
<div>
    <label htmlFor="password">Password</label>
    <input type="password" 
    placeholder='password'
    {...register("password",{
        minLength:{
            value:8,
            message:"the password should contain at least 8 characters",
        },
        
            pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
              }
              
        
    })}
    />
    {formState.errors.password &&(
        <p>
           {formState.errors.password.message} 
        </p>
    )}
</div>
<div>
    <label htmlFor="idno">Id Number</label>
    <input type="text"
    placeholder='Id_Num'
    {...register("idno",{
        required:"the id number is required",
minLength:{
value:8,
message:"id number should be exactly 8 digits",


},
maxLength:{
    value:8,
    message:"the id number should be exactly 8"
},


        pattern:{
            value: /^\d{8}$/,
            message:"pattern should only contain numbers",

            
        }
    })}
    />
    {formState.errors.idno &&(
        <p>
          {formState.errors.idno.message}  
        </p>
    )}
</div>
<div>
    <label htmlFor="phone">Phone Number</label>
    <input type="text"
    placeholder='Phone Number'
    {...register("phone",{
        required:"the phone number is required",
        pattern:{
            value: /^\d{10}$/,
            message:"phone number  should only contain numbers",

            
        },
minLength:{
value:10,
message:"phone number should be exactly 10 digits",


},
maxLength:{
    value:10,
    message:"the phone number should be exactly 10"
},


        
    })}
    />
    {formState.errors.phone &&(
        <p>
          {formState.errors.phone.message}  
        </p>
    )}
</div>

<div>
    <label htmlFor="dob"> Date of Birth</label>
    <input type="date"
    {...register("dob",{
        required:"Date of Birth is required"
    })}
    />
    {formState.errors.dob &&(
        <p>
            {formState.errors.dob.message}
        </p>
    )}
</div>
<div>
                    <label htmlFor="profilePicture">Profile Picture</label>
                    <input
                        type="file"
                        accept="image/*"
                        {...register("profilePicture", { required: "Profile picture is required" })}
                    />
                    {formState.errors.profilePicture && (
                        <p>{formState.errors.profilePicture.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="idPicture">ID Picture</label>
                    <input
                        type="file"
                        accept="image/*"
                        {...register("idPicture", { required: "ID picture is required" })}
                    />
                    {formState.errors.idPicture && (
                        <p>{formState.errors.idPicture.message}</p>
                    )}
                </div>


    <button type='submit'>
Submit
    </button>
</form>

    </div>
  )
}

export default Registration