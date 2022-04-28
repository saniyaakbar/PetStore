import { PET_CREATE,
         PET_DELETE,
         PET_REQUEST,
         PET_SUCCESS,
         PET_FAIL,
         PET_UPDATE
} from "../ActionTypes";

const initState = {
    pets: [],
    errors: null,
    loading: false
}

const petsReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case PET_REQUEST:
            return {
                ...state,
                loading : true,
                
            }

        case PET_SUCCESS:
            return {
                ...state,
                loading : false,
                pets: payload
                
            }
        
        case PET_FAIL:
            return {
                ...state,
                loading : false,
                errors: payload
                
            }
       
        case PET_CREATE:
            let b = [...state.pets, payload];
            return {
                ...state,
                loading : false,
                pets: b
            }
        
        case PET_UPDATE:
            let k = [payload];
            console.log(k[0])
            return {
                ...state,
                loading : false,
                pets: k[0]
            }

        case PET_DELETE:
            let p = [payload];
            // console.log(k[0])
            return {
                ...state,
                loading : false,
                pets: p[0]
            }
            
        
             
    
        default: 
            return state;
            
    }
}


export default petsReducer;