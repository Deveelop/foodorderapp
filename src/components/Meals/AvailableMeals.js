import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import {DUMMY_MEALS} from './dummy-meals'
import styles from './AvailableMeals.module.css'

export default function AvailableMeals() {
    const mealsList = DUMMY_MEALS.map((meal) => <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} />)
    return (
        <section className={styles.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    )
}
