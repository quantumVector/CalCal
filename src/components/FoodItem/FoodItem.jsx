import React from 'react';
import styles from './FoodItem.module.css';

const FoodItem = ({ food, weight, protein, fat, carb, calories }) => {
  return (
    <div className={styles.FoodItem}>
      <div className={styles.FoodItem__Item}>{food}</div>
      <div className={styles.FoodItem__Item}>{weight}</div>
      <div className={styles.FoodItem__Item}>{protein}</div>
      <div className={styles.FoodItem__Item}>{fat}</div>
      <div className={styles.FoodItem__Item}>{carb}</div>
      <div className={styles.FoodItem__Item}>{calories}</div>
    </div>
  )
}

export default FoodItem;