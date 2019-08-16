import {  FETCH_SMURF_DATA_START, FETCH_SMURF_DATA_SUCCESS, 
    FETCH_SMURF_DATA_FAILURE, DELETE_SMURF_DATA_START, DELETE_SMURF_DATA_SUCCESS,
    POST_SMURF_DATA_START, POST_SMURF_DATA_SUCCESS} from "../actions";

const intitialState = {
    test: "test",
    smurfArray: [],
    isLoading: false
}

export const reducer = (state = intitialState, action)=> {
    switch(action.type){
        case FETCH_SMURF_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
         };
        case FETCH_SMURF_DATA_SUCCESS:
            return{
                ...state,
                isLoading: false,
                error: '',
                smurfArray: action.payload
                
                }
        case POST_SMURF_DATA_START:
            return{
                ...state,
                error: '',
                isLoading: true

            }
        case POST_SMURF_DATA_SUCCESS: 
            return {
                ...state,
                error: '',
                smurfArray: action.payload,
                isLoading: false
            }
        case DELETE_SMURF_DATA_START:
            return{
                ...state,
                error: '',
                isLoading: true
            }
        case DELETE_SMURF_DATA_SUCCESS:
            return{
                ...state,
                error: '',
                isLoading: false,
                smurfArray: action.payload
            }
        default:
            return state;
    }
}