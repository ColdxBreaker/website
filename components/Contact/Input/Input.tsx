import React from 'react';
import classes from "./Input.module.css";
// @ts-ignore
const input = (props) => {
    return (
        <div className={classes.Inputbox}>
            <p>{props.name}*</p>
            <input required type={"text"} value={props.message} onChange={(event) => props.textChange(event, props.name)}></input>
        </div>
    );
}
export default input;
