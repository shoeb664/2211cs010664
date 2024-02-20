import React from 'react';
import "./style.css";
const Box=(props) =>{
    return(
        <>
       <div class='Box'>
            <p>{props.heading}</p>
       </div> 
       </>
    );
};

export default Box;