import React from 'react';
import styles from './Hundred.module.css';

const Hundred = ({
  title,
  hundredWeight,
  hundredProtein,
  hundredFat,
  hundredCarb,
  hundredCalories }) => {
  return (
    <div className={styles.Hundred}>
      <div className={styles.Hundred__Item}>{title}</div>
      <div className={styles.Hundred__Item}>{hundredWeight}</div>
      <div className={styles.Hundred__Item}>{hundredProtein}</div>
      <div className={styles.Hundred__Item}>{hundredFat}</div>
      <div className={styles.Hundred__Item}>{hundredCarb}</div>
      <div className={styles.Hundred__Item}>{hundredCalories}</div>
    </div>
  )
}

export default Hundred;