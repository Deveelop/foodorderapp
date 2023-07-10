import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    
        apiKey: "AIzaSyAFrIuanlsLciX_ZF9EQqS7k6OBn8sy7EI",
        authDomain: "admin-meal-reg.firebaseapp.com",
        projectId: "admin-meal-reg",
        storageBucket: "admin-meal-reg.appspot.com",
        messagingSenderId: "785049934673",
        appId: "1:785049934673:web:95bdfd7e7e77c5219fd170"
      
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}