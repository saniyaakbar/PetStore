import { PET_CREATE,
    PET_DELETE,
    PET_REQUEST,
    PET_SUCCESS,
    PET_FAIL,
    PET_UPDATE
} from "../ActionTypes";


export const loadPets = () => (dispatch) => {

    try{

        dispatch({ type: PET_REQUEST })
        setTimeout(() => {
            const data = JSON.parse(localStorage.getItem('pets')) || [];
            dispatch({
                type: PET_SUCCESS,
                payload: data
            })
        }, 2000);

    }
    catch(e){
        dispatch({
            type: PET_FAIL,
            payload: e
        }
        )
    }
}

export const createpet = (pet) => (dispatch, getState) => {
    try {

        let NewPet = [...getState().pets.pets, pet];


        // let currentUser = JSON.parse(localStorage.getItem('users')).filter((e) => e.email === user.email)
        
        

        let user = JSON.parse(localStorage.getItem("LoggedInUser"));
        user[0].mypets.push(pet);
        console.log(user[0].mypets);

        let NewUser = [...getState().users.users];
        
        // localStorage.setItem("users", JSON.stringify(NewUser));


        let id = NewUser.findIndex((e) => e.email === user[0].email)
        NewUser.splice(id, 1)
        // console.log(id)
        NewUser.push(user)
        console.log(NewUser)
        localStorage.setItem('users', JSON.stringify(NewUser));
        localStorage.setItem('LoggedInUser', JSON.stringify(user))
        console.log("HAHAHA")
        // console.log(getState().users.users);
        localStorage.setItem("pets", JSON.stringify(NewPet));
        console.log(user);
        dispatch({
            type: PET_CREATE,
            payload: pet
        })


    } catch (error) {
        dispatch({
            type: PET_FAIL,
            payload: error
        })
    }
}  

export const updatepet = (pet) => (dispatch, getState) => {
    try {

        let user = JSON.parse(localStorage.getItem("LoggedInUser"));


        let UpdatedPet = user[0].mypets;
        let Uid = UpdatedPet.findIndex((e) => e.id === pet.id)
        UpdatedPet.splice(Uid, 1)
        console.log(Uid)
        UpdatedPet.push(pet)




        user[0].mypets = UpdatedPet
        console.log(UpdatedPet)
        let NewUser = [...getState().users.users];
        // console.log(user[0].mypets);
        let idd = NewUser.findIndex((e) => e.email === user[0].email)
        NewUser.splice(idd, 1)
        // console.log(id)
        NewUser.push(user)


        localStorage.setItem('users', JSON.stringify(NewUser));
        localStorage.setItem('LoggedInUser', JSON.stringify(user))



        let NewPet = [...getState().pets.pets];
        let id = NewPet.findIndex((e) => e.id === pet.id)
        NewPet.splice(id, 1)
        console.log(id)
        NewPet.push(pet)
        localStorage.setItem("pets", JSON.stringify(NewPet));

        dispatch({
            type: PET_UPDATE,
            payload: NewPet
        })


    } catch (error) {
        dispatch({
            type: PET_FAIL,
            payload: error
        })
    }
} 



export const deletepet = (pet) => (dispatch, getState) => {
    try {
        console.log("delete chala")

        let user = JSON.parse(localStorage.getItem("LoggedInUser"));


        let UpdatedPet = user[0].mypets;
        let Uid = UpdatedPet.findIndex((e) => e.id === pet.id)
        UpdatedPet.splice(Uid, 1)
        console.log(Uid)
        



        user[0].mypets = UpdatedPet
        console.log(UpdatedPet)
        let NewUser = [...getState().users.users];
        // console.log(user[0].mypets);
        let idd = NewUser.findIndex((e) => e.email === user[0].email)
        NewUser.splice(idd, 1)
        // console.log(id)
        NewUser.push(user)


        localStorage.setItem('users', JSON.stringify(NewUser));
        localStorage.setItem('LoggedInUser', JSON.stringify(user))



        let NewPet = [...getState().pets.pets];
        let id = NewPet.findIndex((e) => e.id === pet.id)
        NewPet.splice(id, 1)
        console.log(id)
        
        localStorage.setItem("pets", JSON.stringify(NewPet));

        dispatch({
            type: PET_DELETE,
            payload: NewPet
        })


    } catch (error) {
        dispatch({
            type: PET_FAIL,
            payload: error
        })
    }
} 