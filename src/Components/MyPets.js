import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link, useParams} from 'react-router-dom'
import { deletepet } from '../store/Actions/petsActions';

function MyPets() {
  const dispatch = useDispatch();
  const { pets, errors, loading} = useSelector(state => state.pets);
  const { users, usererrors, userloading} = useSelector(state => state.users);
  const LoggedInUser = JSON.parse(localStorage.getItem('LoggedInUser'))
  useEffect(() => {
    console.log("OOOOOOOO")
    console.log(LoggedInUser[0].mypets[0]);
    // console.log(pets[0].image);
    if (errors || usererrors) {
      // console.log(errors);
      alert('Something Went Wrong')
  }
  
  }, [errors])

  function deletemypet(pet){
    dispatch(deletepet(pet));
  }
    

  return (loading || userloading) ? 'Loading...' : (
    <div className='mt-3' style={{display: "flex", flexWrap: "wrap", width: "80vw"}}>
      {/* <h3>Welcome {users.name} !</h3> */}
      
        {LoggedInUser[0].mypets.map((b, i) => {
          // let i = useParams;
          console.log(b.id)
          return (
            <div className="card" style={{width: "18rem", marginRight: "1vmax", marginTop: "1vmax"}}>
            <img src={`${b.image}`} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{b.name}</h5>
              <p className="card-text">owner: {b.owner}, breed: {b.breed}, </p>
              <p className="card-text">Age: {b.age}, gender: {b.gender}, </p>
              <p className="card-text">Medical: : {b.medical}</p>
              <p className="card-text">Gives:  {b.gives}</p>



              <Link  to={`/update/${i}`} className="btn btn-primary">Update</Link>
              <button onClick={() => deletemypet(b)} className="btn btn-danger mx-3">Delete</button>
            </div>
          </div>
          )
        })}
        </div>
  )
}

export default MyPets