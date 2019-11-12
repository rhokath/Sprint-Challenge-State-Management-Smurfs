import React from 'react';
import {connect} from "react-redux";
import {deleteData} from "../actions";

const Smurf = ({smurf, deleteData}) => {
    console.log(smurf)
    return(
        <div>
            <p>Name:{smurf.name}</p>
            <p>Age:{smurf.age}</p>
            <p>Height:{smurf.height}</p>
            <button onClick={(e)=> deleteData(smurf.id)} >Remove Smurf</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        test: state.test,
        smurfArray: state.smurfArray
       
    }
}

export default connect(mapStateToProps, {deleteData})(Smurf);