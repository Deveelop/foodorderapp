import styles from './MealsSummary.module.css'
export default function MealsSummary(){
    return(
        <section className={styles.summary}>
            <h2>Delicious Mama's Food, Delivered To you!</h2>
            <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious and affordable lunch or dinner at home.</p>
            <p>All our meals are cooked with high-quality ingrdients, just-in-time and of course by experienced mamas(chefs)!</p>
        </section>
    )
}