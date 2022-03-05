import React, { useEffect, useState } from 'react';
import './App.css';
import TableHead from './components/TableHead/TableHead';
import FoodItem from './components/FoodItem/FoodItem';
import Form from './components/Form/Form';
import Total from './components/Total/Total';
import Hundred from './components/Hundred/Hundred';

function App() {
  const [food, setFood] = useState([]);
  const [activeForm, setActiveForm] = useState(false);
  const [id, setId] = useState(1);
  const [total, setTotal] = useState({
    weight: 0,
    protein: 0,
    fat: 0,
    carb: 0,
    calories: 0,
  });
  const [hundredGrams, setHundredGrams] = useState({
    weight: 0,
    protein: 0,
    fat: 0,
    carb: 0,
    calories: 0,
  });

  const onClickAdd = () => {
    setActiveForm(true);
  };

  useEffect(() => {
    if (food.length > 0) {
      const sumFood = food.reduce((previousValue, currentValue) => {
        return {
          weight: +previousValue.weight + +currentValue.weight,
          protein: +previousValue.protein + +currentValue.protein,
          fat: +previousValue.fat + +currentValue.fat,
          carb: +previousValue.carb + +currentValue.carb,
          calories: +previousValue.calories + +currentValue.calories,
        }
      });

      const sumHundredGramsFood =  {
        weight: 100,
        protein: (sumFood.protein * 100 / sumFood.weight).toFixed(1),
        fat: (sumFood.fat * 100 / sumFood.weight).toFixed(1),
        carb: (sumFood.carb * 100 / sumFood.weight).toFixed(1),
        calories: (sumFood.calories * 100 / sumFood.weight).toFixed(1),
      };

      setTotal(sumFood);
      setHundredGrams(sumHundredGramsFood);
    }
  }, [food]);

  return (
    <div className="App">
      <TableHead />

      {food.length > 0 &&
        food.map((item) => {
          return <FoodItem
            key={item.id}
            food={item.food}
            weight={item.weight}
            protein={item.protein}
            fat={item.fat}
            carb={item.carb}
            calories={item.calories}
          />
        })
      }

      {activeForm &&
        <Form
          setActiveForm={setActiveForm}
          food={food}
          setFood={setFood}
          id={id}
          setId={setId} />
      }

      {!activeForm &&
        <button
          className="Btn"
          onClick={onClickAdd}>
          Добавить
        </button>
      }

      <Total
        title={'Итого'}
      totalWeight={total.weight}
      totalProtein={total.protein}
      totalFat={total.fat}
      totalCarb={total.carb}
      totalCalories={total.calories}
      />
      <Hundred
        title={'100 грамм'}
      hundredWeight={hundredGrams.weight}
      hundredProtein={hundredGrams.protein}
      hundredFat={hundredGrams.fat}
      hundredCarb={hundredGrams.carb}
      hundredCalories={hundredGrams.calories}
      />
    </div>
  );
}

export default App;
