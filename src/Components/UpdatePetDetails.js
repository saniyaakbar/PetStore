import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { createpet, updatepet } from '../store/Actions/petsActions';

function UpdatePetDetails() {
  const { pets, errors, loading} = useSelector(state => state.pets);
  const LoggedInUser = JSON.parse(localStorage.getItem('LoggedInUser'))
  let i = useParams();
  // console.log(Number(i.id))
  console.log(pets[i.id]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

const SubmitHandler =  (e)  =>  {
      e.preventDefault();
      const pet = {
        id: LoggedInUser[0].mypets[i.id].id,
        name: e.target.Name.value,
        image: e.target.Image.value,
        owner: e.target.Owner.value,
        breed: e.target.Breed.value,
        age: e.target.Age.value,
        gender: e.target.Gender.value,
        medical: e.target.Medical.value,
        gives: e.target.Gives.value
      }

    dispatch(updatepet(pet))
    // .then(function(updated){
      navigate('/home');
    // })
      
}


  return (
    <div style={{width: "50vw"}} className='mt-3'>
        <form onSubmit={SubmitHandler}>
            <h2>Pet Details</h2>
    <div className="mb-3">
      <input type="Text"  name='Name' defaultValue = {LoggedInUser[0].mypets[i.id].name} placeholder='Name' className="form-control" id="exampleInputText1" aria-describedby="TextHelp"/>
    </div>
    <div className="mb-3">
      <input type="Text" name='Image' defaultValue={LoggedInUser[0].mypets[i.id].image} placeholder='Image' className="form-control" id="exampleInputText1" aria-describedby="TextHelp"/>
    </div>
    <div className="mb-3">
      <input type="Text" name='Owner' defaultValue={LoggedInUser[0].mypets[i.id].owner} placeholder='Owner' className="form-control" id="exampleInputText1" aria-describedby="TextHelp"/>
    </div>
    <div className="mb-3">
      <input type="Text" name='Breed' defaultValue={LoggedInUser[0].mypets[i.id].breed} placeholder='Breed' className="form-control" id="exampleInputText1" aria-describedby="TextHelp"/>
    </div>
    <div className="mb-3">
      <input type="Text" name='Age' defaultValue={LoggedInUser[0].mypets[i.id].age} placeholder='Age' className="form-control" id="exampleInputText1" aria-describedby="TextHelp"/>
    </div>
    <div className="mb-3">
      <input type="Text" name='Gender' defaultValue={LoggedInUser[0].mypets[i.id].gender} placeholder='Gender' className="form-control" id="exampleInputText1" aria-describedby="TextHelp"/>
    </div>

    <div className="mb-3">
      <input type="Text" name='Medical' defaultValue={LoggedInUser[0].mypets[i.id].medical} placeholder='Medical condition (If any)' className="form-control" id="exampleInputText1" aria-describedby="TextHelp"/>
    </div>

    <div className="mb-3">
      <input type="Text" name='Gives' defaultValue={LoggedInUser[0].mypets[i.id].gives} placeholder='Gives...' className="form-control" id="exampleInputText1" aria-describedby="TextHelp"/>
    </div>
    
   




    <button type="submit" className="btn btn-primary">Update</button>
  </form></div>
  )
}

export default UpdatePetDetails