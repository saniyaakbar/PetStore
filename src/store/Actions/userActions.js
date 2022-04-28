import { USER_SIGNUP,
         USER_LOGIN,
         USER_REQUEST,
         USER_SUCCESS,
         USER_FAIL,
         USER_LOGOUT
} from "../ActionTypes";


export const loadUsers = () => (dispatch) => {

    try{

        dispatch({ type: USER_REQUEST })
        setTimeout(() => {
            const data = JSON.parse(localStorage.getItem('users')) || [];
            dispatch({
                type: USER_SUCCESS,
                payload: data
            })
        }, 2000);

    }
    catch(e){
        dispatch({
            type: USER_FAIL,
            payload: e
        }
        )
    }
}

export const createuser = (user) => (dispatch, getState) => {
    try {

        // let currentUser = JSON.parse(localStorage.getItem('users')).filter((e) => e.email === user.email)
        
        // localStorage.setItem("LoggedInUser", JSON.stringify(currentUser));

        let NewUser = [...getState().users.users, user];

        localStorage.setItem("users", JSON.stringify(NewUser));

        dispatch({
            type: USER_SIGNUP,
            payload: user
        })


    } catch (error) {
        dispatch({
            type: USER_FAIL,
            payload: error
        })
    }
} 


export const loginuser = (user) => (dispatch, getState) => {
    try {
        localStorage.removeItem("LoggedInUser");
        // let NewUser = [...getState().users.users, user];
        let currentUser = JSON.parse(localStorage.getItem('users')).filter((e) => e.email === user.email)
        console.log("LOOOOOOOOOOOOO");
        console.log(currentUser);
        localStorage.setItem("LoggedInUser", JSON.stringify(currentUser));

        dispatch({
            type: USER_LOGIN,
            payload: currentUser
        })


    } catch (error) {
        dispatch({
            type: USER_FAIL,
            payload: error
        })
    }
} 


export const logoutuser = (user) => (dispatch, getState) => {
    try {
       window.localStorage.removeItem('LoggedInUser')
        // let NewUser = [...getState().users.users, user];
       console.log("chala")
        dispatch({
            type: USER_LOGOUT,
            payload: []
        })


    } catch (error) {
        dispatch({
            type: USER_FAIL,
            payload: error
        })
    }
} 