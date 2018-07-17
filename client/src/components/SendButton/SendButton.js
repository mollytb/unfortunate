import React from "react";
import {Link} from "react-router-dom";

const SendButton = props => (
   <div>
    <button className="btn btn-primary">Send</button>
 
    <textarea>{'/Home/' + props.fortune._id}</textarea>
    </div>
);

export default SendButton;