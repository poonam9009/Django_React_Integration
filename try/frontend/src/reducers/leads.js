import {GET_LEADS} from '../actions/types.js'; 

const initialState = {
    leads:[],
};

export default function(state = initialState ,action){
    // console.log(action.types)
    // console.log(action.payloads)
    switch(action.types){
        case GET_LEADS :
            return {
                ...state,
                leads : action.payloads
            };
            default :
            return state;
    }
    // console.log(state)
}
