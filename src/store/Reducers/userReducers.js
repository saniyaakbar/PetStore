import { USER_SIGNUP,
    USER_LOGIN,
    USER_REQUEST,
    USER_SUCCESS,
    USER_FAIL,
    USER_LOGOUT
} from "../ActionTypes";


const initState = {
LoggedInUser: [],
users: [],
errors: null,
loading: false
}

const usersReducer = (state = initState, {type, payload}) => {
switch (type) {
   case USER_REQUEST:
       return {
           ...state,
           loading : true,
           
       }

   case USER_SUCCESS:
       return {
           ...state,
           loading : false,
           users: payload
           
       }
   
   case USER_FAIL:
       return {
           ...state,
           loading : false,
           errors: payload
           
       }
  
   case USER_SIGNUP:
       let b = [...state.users, payload];
       return {
           ...state,
           loading : false,
           users: b
       }
    case USER_LOGIN:
    let u = [payload];
    return {
        ...state,
        loading : false,
        LoggedInUser: u
        // users: b
    }

    case USER_LOGOUT:
    let p = [payload];
    return {
        ...state,
        loading : false,
        LoggedInUser: p
        // users: b
    }
       
   
        

   default: 
       return state;
       
}
}


export default usersReducer;