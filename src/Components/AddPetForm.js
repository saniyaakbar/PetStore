import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import {v4} from "uuid";
import moment from "moment";
import {createpet} from '../store/Actions/petsActions'

function AddPetForm() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

const SubmitHandler = (e) => {
      e.preventDefault();
    let identity = v4() + moment().format("DD-MM-YYYY hh:mm:ss")
      const pet = {
        id: identity.replace(/ /g, ''),
        name: e.target.Name.value,
        image: e.target.Image.value,
        owner: e.target.Owner.value,
        breed: e.target.Breed.value,
        age: e.target.Age.value,
        gender: e.target.Gender.value,
        medical: e.target.Medical.value,
        gives: e.target.Gives.value
      }

      dispatch(createpet(pet));
      navigate('/home');
}

  return (
    <div style={{width: "50vw"}} className='mt-3'>
        <form onSubmit={SubmitHandler}>
            <h2>Pet Details</h2>
            <div className="mb-3">
      <input type="Text" name='Name' placeholder='Name' className="form-control" id="exampleInputText1" aria-describedby="TextHelp"/>
    </div>
    <div className="mb-3">
      <input type="Text" name='Image' placeholder='Image url' className="form-control" id="exampleInputText1" aria-describedby="TextHelp"/>
    </div>
    <div className="mb-3">
      <input type="Text" name='Owner' placeholder='Owner' className="form-control" id="exampleInputText1" aria-describedby="TextHelp"/>
    </div>
    <div className="mb-3">
      <input type="Text" name='Breed' placeholder='Breed' className="form-control" id="exampleInputText1" aria-describedby="TextHelp"/>
    </div>
    <div className="mb-3">
      <input type="Text" name='Age' placeholder='Age' className="form-control" id="exampleInputText1" aria-describedby="TextHelp"/>
    </div>
    <div className="mb-3">
      <input type="Text" name='Gender' placeholder='Gender' className="form-control" id="exampleInputText1" aria-describedby="TextHelp"/>
    </div>

    <div className="mb-3">
      <input type="Text" name='Medical' placeholder='Medical condition (If any)' className="form-control" id="exampleInputText1" aria-describedby="TextHelp"/>
    </div>
    
   

    <div className="mb-3">
      <input type="Text" name='Gives'  placeholder='Gives...' className="form-control" id="exampleInputText1" aria-describedby="TextHelp"/>
    </div>
    
   



    <button type="submit" className="btn btn-primary">Add Pet</button>
  </form></div>
  )
}

export default AddPetForm