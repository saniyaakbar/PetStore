import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

function Navigation() {
  const { LoggedInUser} = useSelector(state => state.users);
  console.log(`Logged In ${LoggedInUser.length}`)
  let currentUser = JSON.parse(localStorage.getItem('LoggedInUser'))
    console.log(`LOCAL HOST ${currentUser}`)
  return (
    <ul className="nav nav-tabs">
  {currentUser === null?
    <React.Fragment>
      <li className="nav-item">
    <Link className="nav-link" to={'/home'}>Home</Link>
  </li>
<li className="nav-item">
    <Link className="nav-link" to={'/signup'}>SignUp</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to={'/login'}>Login</Link>
  </li>
    </React.Fragment>
    
  :
  
    <React.Fragment>
 <li className="nav-item">
    <Link className="nav-link" to={'/home'}>Home</Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to={'/addPet'}>Add new Pet</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to={'/myPets'}>Your Pets</Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to={'/login'}>Logout</Link>
  </li>
    </React.Fragment>
  }

  
  

 
  
</ul>
  )
}

export default Navigation