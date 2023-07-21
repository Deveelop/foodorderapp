import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import styles from './AvailableMeals.module.css'
import MealsApi from "../api/meals-api";

export default function AvailableMeals() {
  
    const [httperror, setError] = useState(null);
  const {fetchRequest:fetchMeals, convertedMeals:meals, loadingState:isLoading, loadingFunc:setIsLaoding} = MealsApi()

useEffect(()=>{
    fetchMeals().catch((err)=>{
setIsLaoding(false);
setError(err.message || 'Something went wrong')
    });
}, []);

if(isLoading){
    return(
        <section className={styles.mealsload}>
            <p>Loading available meals...</p>
        </section>
    )
}
if(httperror){
    return(
        <section className={styles.errorMsg}>
            <p>{httperror}</p>
        </section>
    )
}

const mealsList = meals.map((meal)=>(
    <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>
))
    return (
        <section className={styles.meals}>

            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}
