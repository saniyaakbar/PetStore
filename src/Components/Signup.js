import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { createuser } from '../store/Actions/userActions';

function Signup() {
  const { users, usererrors, userloading} = useSelector(state => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

const SubmitHandler = (e) => {
      e.preventDefault();
      const user = {
        name: e.target.Name.value,
        email: e.target.Email.value,
        password: e.target.Password.value,
        mypets: []
      }

     let alreadyUser = users.filter((e) => e.email === user.email);

     if(alreadyUser.length !== 0){
       alert("User already exits!");
     }
     else{
      dispatch(createuser(user));
      navigate('/home');
     }
    // console.log(alreadyUser.length);
      
}


  return (
    <div style={{width: "50vw"}}  className='mt-3'>
        <h1>Hii!</h1>
        <h3> It's great to see you!</h3>
       <form onSubmit={SubmitHandler}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name='Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" name='Name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name='Password' className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Sign Up!</button>
</form>
        </div>
  )
}

export default Signup