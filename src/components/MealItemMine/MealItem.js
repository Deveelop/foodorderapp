// import React,{useState} from "react";
// import styles from './MealItem.module.css';
// import Card from "../UI/Card";
// import Input from "../UI/Input";
// import classes from '../UI/Input.module.css'
// import { DUMMY_MEALS } from "./dummy-meals";

// export default function MealItem(props){
//     const [entered, setEntry] = useState('')
//     const input = (e) =>{
//         setEntry(e.target.value)
//     }
//     const submitItem = (e) => {
//         e.preventDefault();
//      console.log(entered)
//     }
// return(
// <Card>
// {DUMMY_MEALS.map((meals) => {
// return(<div key={Math.random()} className={styles.meal}> <div><h3>{meals.name} </h3>
// <p className={styles.description}>{meals.description}</p>
// <h4 className={styles.price}>${meals.price}</h4>
// </div>

// <div><div className={classes.input}>
// <form onSubmit={submitItem}>
//     <Input onChange={input}  type='number' label='Amount'/>
// <button>+Add</button>
// </form>
// </div>
// </div>
//  </div>
// )})}
// </Card>
// )
// }