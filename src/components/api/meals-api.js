import {useState, useContext} from 'react'
import CartContext from '../../store/cart-context';
function MealsApi() {
  const ctx = useContext(CartContext);
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLaoding] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);
   const [didSubmit, setDidSubmit] = useState(false);
   const [isError, setIsError] = useState(false);

    const fetchMeals = async () =>{
        setIsLaoding(true);
        
     const response = await fetch('https://react-http-85514-default-rtdb.firebaseio.com/meals.json');
     const responseData = await response.json();
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

    const makeUpdateRequest = async (updateReq) => {
      const response = await fetch('https://react-http-85514-default-rtdb.firebaseio.com/meals.json', {
          method: 'POST',
          body: JSON.stringify(updateReq),
          headers: {
              'Content-Type': 'application/json'
          }
      })
  }

  const submitHandler = async (userDetails) =>{
    setIsSubmitting(true)
    try{
const response = await fetch('https://react-http-85514-default-rtdb.firebaseio.com/mealsorder.json',{
    method: 'POST',
    body: JSON.stringify({
        user: userDetails,
        orderedItems: ctx.items
    }),
    headers:{
        'Content-Type': 'application/json'
    }
})
if(!response.ok){
    throw new Error('Order Failed...try again!')
}

setIsSubmitting(false);
setDidSubmit(true);
ctx.clearCart()
} catch(err){
setIsError(err.message || 'Something went wrong');
}
} 
  return {
fetchRequest: fetchMeals,
updateFunc: makeUpdateRequest,
submitRequestFunc: submitHandler,
submitingStateVar: isSubmitting,
didSubmitStateVar: didSubmit,
errorStateVar: isError,
convertedMeals: meals,
loadingState: isLoading,
loadingFunc: setIsLaoding
  }
}

export default MealsApi;