import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import {Link, useParams} from 'react-router-dom'
import homecss from './Home.css'
function Home() {

  const { pets, errors, loading} = useSelector(state => state.pets);
  const { users, usererrors, userloading} = useSelector(state => state.users);

  useEffect(() => {
    // console.log(pets);
    // console.log(pets[0].image);
    if (errors || usererrors) {
      // console.log(errors);
      alert('Something Went Wrong')
  }
  
  }, [errors])
    

  return (loading || userloading) ? 'Loading...' : (
    
    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example mt-5" tabindex="0"  className= {homecss.bgc} style={{display: "flex", flexWrap: "wrap", width: "80vw", height:"80vh",  overflowY: "scroll"}}>
      {/* <h3>Welcome {users.name} !</h3> */}
      
        {pets.map((b, i) => {
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



              {/* <Link  to={`/update/${i}`} className="btn btn-primary">Update</Link> */}
            </div>
          </div>
          )
        })}
        
        </div>
  )
}

export default Home