import React from "react";
export default function Input(props){
    return(
        <>
        <label>{props.label}</label>
        <input className={props.className} type={props.type} value={props.value} onChange={props.onChange}>{props.children}</input>
        </>
    )
}