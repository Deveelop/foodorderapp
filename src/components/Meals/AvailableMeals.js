import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import styles from './AvailableMeals.module.css'

export default function AvailableMeals() {
    const [meals, setMeals] = useState([]);
    const [httperror, setError] = useState(null);
    const [isLoading, setIsLaoding] = useState(false);

useEffect(()=>{

    const fetchMeals = async () =>{
        setIsLaoding(true);
        
     const response = await fetch('https://react-http-85514-default-rtdb.firebaseio.com/meals.json');
     const responseData = await response.json();
     console.log(responseData)
    if(!response.ok){
        throw new Error('Failed to fetch data')
    }
     const loadedMeals = [];
     for (const key in responseData){
        loadedMeals.push({
            id:key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price
        })
     }
    
    setMeals(loadedMeals)
setIsLaoding(false)

    }
    
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
