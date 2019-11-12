import axios from 'axios';

export const POST_SMURF_DATA_SUCCESS = 'POST_SMURF_DATA_SUCCESS'
export const FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START';
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS';
export const FETCH_SMURF_DATA_FAILURE = 'FETCH_SMURF_DATA_FAILURE';
export const POST_SMURF_DATA_START = 'POST_SMURF_DATA_START';
export const DELETE_SMURF_DATA_START = 'DELETE_SMURF_DATA_START';
export const DELETE_SMURF_DATA_SUCCESS = 'DELETE_SMURF_DATA_SUCCESS';
export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_SMURF_DATA_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        // res.data.data
        console.log("this is the response", res);
        dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: res.data});
      })
      .catch(err => {
          console.log("this is an error", err)
        dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: err.response });
      });
  };
};

export const postData = (value)=> {
    return dispatch => {
        dispatch({type: POST_SMURF_DATA_START})
        axios
        .post("http://localhost:3333/smurfs", value)
        .then(res => {
            console.log("this is the post respone", res)
            dispatch({type: POST_SMURF_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log("something went wrong in post", err)
        })
    }
}

export const deleteData = (id) => {
    return dispatch => {
        dispatch({type: DELETE_SMURF_DATA_START})
        axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res =>{
            console.log("this is the delete response", res)
            dispatch({type: DELETE_SMURF_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log("there was an error deleting", err)
        })
    }
}