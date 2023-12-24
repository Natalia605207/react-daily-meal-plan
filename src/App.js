import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import uuid from "react-uuid";
import './App.css';
import MyDailyNotes from './components/MyDailyNotes';
import DetailedNotesInformation from './components/DetailedNotesInformation';
import { gsap } from "gsap";

function App() {

  const [mealPlans, setMealPlans] = useState(localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : []);
  const [selectedDay, setSelectedDay] = useState(false);

  useEffect(() => {
    localStorage.setItem("mealPlans", JSON.stringify(mealPlans))
  }, [mealPlans])

  const animation = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .from("h1", {
          duration: 0.8, y: -40, ease: "power0.easeNone", opacity: 0
        })
        .from(".subheading", {
          duration: 0.8, y: -60, ease: "power0.easeNone", opacity: 0
        })
        .from(".App", {
          duration: 0.9, y: 20, ease: "power0.easeNone", opacity: 0
        });
    }, animation);
    return () => ctx.revert()
  }, []);
  
  const addMeal = () => {
    const newMeal = {
      title: 'Enter a day',
      id: uuid(),
      breakfast: "Breakfast:",
      lunch: "Lunch:",
      dinner: "Dinner:",
      snack: "Snack:",
      ingredients: "Enter ingredients here"
    }
    setMealPlans([newMeal, ...mealPlans])
    console.log("ADDED ITEM!!!")
  }

  const deleteDay = (mealId) => {
    setMealPlans(mealPlans.filter(({id}) => id !== mealId))
  }

  const updateDay = (myUpdatedMeal) => {
    const updatedMeals = mealPlans.map((mealPlan) => {
      if (mealPlan.id === myUpdatedMeal.id) {
        return myUpdatedMeal
      }
        return mealPlan;
    })
    setMealPlans(updatedMeals)
  }

  const getActiveMeal = () => {
    return mealPlans.find(({id}) => id === selectedDay)
  }

  return (
    <div className="main" ref={animation}>
      <h1>Daily Meal Plan</h1>
      <p className="subheading">Plan your meal ahead of time!</p>
    <div className="App">
      <MyDailyNotes 
      addMeal={addMeal} 
      mealPlans={mealPlans} 
      deleteDay={deleteDay} 
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
      />
      <DetailedNotesInformation
      getActiveMeal={getActiveMeal()}
      updateDay={updateDay}
      />
    </div>
    <p className="bottomInfo">Designed and developed by <a href="https://natalia-musikhina-portfolio.glitch.me/" target="_blank" rel="noreferrer">Natalia Musikhina</a></p>
    </div>
  );
}

export default App;
