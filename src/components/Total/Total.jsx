import React from 'react';
import styles from './Total.module.css';

const Total = ({
  title,
  totalWeight,
  totalProtein,
  totalFat,
  totalCarb,
  totalCalories }) => {
  return (
    <div className={styles.Total}>
      <div className={styles.Total__Item}>{title}</div>
      <div className={styles.Total__Item}>{totalWeight}</div>
      <div className={styles.Total__Item}>{totalProtein}</div>
      <div className={styles.Total__Item}>{totalFat}</div>
      <div className={styles.Total__Item}>{totalCarb}</div>
      <div className={styles.Total__Item}>{totalCalories}</div>
    </div>
  )
}

export default Total;