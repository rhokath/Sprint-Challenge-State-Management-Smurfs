import React, {useState} from 'react';
import {connect } from 'react-redux';
import {getData, postData} from '../actions';
import Smurf from "./smurf";

const SmurfList = (props) => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        height: "",
      });  
      const inputHandler = e => {
        console.log("target name", e.target.name);
        console.log("value", e.target.value);
        setInput({ ...input, [e.target.name]: e.target.value });
      };    
      const submitHandler = e => {
        e.preventDefault();
        props.postData({ ...input });
        setInput({
          name: "",
          height: "",
          age: "",
        });
      };
    return (
        <div>
            smurfs
            <form onSubmit={submitHandler}>
                <h1>Add Smurf</h1>
            <div>
            <label htmlFor="Name">
                Name:{" "}
            <input
                type="text"
                value={input.name}
                onChange={inputHandler}
                name="name"
          />
            </label>
            <label htmlFor="Email">
                Age:{" "}
            <input
                type="text"
                value={input.age}
                onChange={inputHandler}
                name="age"
          />
            </label>
            <label htmlFor="Role">
                 Height:{" "}
            <input
                type="text"
                value={input.height}
                onChange={inputHandler}
                name="height"
            />
            </label>
            </div>
            <button>Add Smurf</button>
            </form>

                <button onClick={props.getData}> see smurfs</button>
            {/* {props.smurfArray && props.smurfArray.map(smurf => {
            return<Smurf key={smurf.id}>{smurf.name}/>})
            } */}
              {props.smurfArray &&
            props.smurfArray.map((smurf, index) => <Smurf key={smurf.id} smurf={smurf}/>)
             }
    </div>
    )
 }
const mapStateToProps = state => {
    return {
        test: state.test,
        smurfArray: state.smurfArray
       
    }
}

export default connect(mapStateToProps, {getData, postData})(SmurfList);