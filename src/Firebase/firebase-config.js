import {initializeApp} from 'firebase/app'
// import {getAnalytics} from 'firebase/analytics'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDqThzxUsHCSu2g0v3QUfjrT3ZwoPVDQoE",
  authDomain: "marco-castellacci.firebaseapp.com",
  projectId: "marco-castellacci",
  storageBucket: "marco-castellacci.appspot.com",
  messagingSenderId: "1044178693529",
  appId: "1:1044178693529:web:52e7f5ee916a4ac8ebb708",
  measurementId: "G-ZXWL4VNRF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app)

export const db = app.firestore()

