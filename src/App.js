import React, { useEffect } from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from './Components/Login';
import Navigation from './Components/Navigation';
import Signup from './Components/Signup';
import Home from './Components/Home'
import AddPetForm from './Components/AddPetForm';
import UpdatePetDetails from './Components/UpdatePetDetails'
import {useDispatch} from 'react-redux'
import {loadPets} from './store/Actions/petsActions'
import { loadUsers } from './store/Actions/userActions';
import MyPets from './Components/MyPets';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(loadPets());
    dispatch(loadPets())
    dispatch(loadUsers())

  }, [dispatch])
  

  return (
    <div style={{backgroundImage: "url('https://images.unsplash.com/photo-1440428099904-c6d459a7e7b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')", border: "1px solid transparent", backgroundPosition: "center", backgroundSize: "cover", height: '100vh'}} >
  <div  className='container mt-3 mb-5'>
  
    <Navigation/>
    <Routes>
      <Route path='/' element= {<Home/>}></Route>
      <Route path='/signup' element= {<Signup/>}></Route>
      <Route path='/login' element= {<Login/>}></Route>
      <Route path= '/home' element= {<Home/>}></Route>
      <Route path= '/addPet' element= {<AddPetForm/>}></Route>
      <Route path= '/update/:id' element= {<UpdatePetDetails/>}></Route>
      <Route path= '/myPets' element= {<MyPets/>}></Route>

    </Routes>
    </div>
    </div>
  )
}

export default App;

