import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { createuser, loginuser, logoutuser } from '../store/Actions/userActions';

function Login() {

  const { users, usererrors, userloading} = useSelector(state => state.users);
  useEffect(() => {
    // console.log("aaaaa")
    dispatch(logoutuser(localStorage.getItem('LoggedInUser')));
    
  }, [])

  const dispatch = useDispatch();
  const navigate = useNavigate();

const SubmitHandler = (e) => {

 
  

      e.preventDefault();
      const user = {
        
        email: e.target.Email.value,
        password: e.target.Password.value,
        
      }

     let alreadyUser = users.filter((e) => e.email === user.email);
     
    //  console.log(user.email)
     if(alreadyUser.length === 0){
       alert("User Does Not exits!");
       
     }
     else{
      // console.log(alreadyUser[0].password)
       if(user.email === alreadyUser[0].email && user.password === alreadyUser[0].password){
        // dispatch(createuser(user));
        dispatch(loginuser(user));
        navigate('/home');
       }
       else{
         alert("Wrong email or password!")
       }
      
     }
    // console.log(alreadyUser.length);
      
}


  return (
    <div style={{width: "50vw"}} className='mt-3'>
        <h1>Welcome Back!</h1>
       <form onSubmit={SubmitHandler}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name='Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name='Password' className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit"  className="btn btn-primary">Submit</button>
</form>
        </div>
  )
}

export default Login