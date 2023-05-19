import React from "react";
import styles from './Input.module.css'
export default function Input(props){
    return(
        <div className={styles.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        {/* <input className={props.className} type={props.type} value={props.value} onChange={props.onChange}>{props.children}</input> */}
        <input {...props.input}/>
        </div>
    )
}