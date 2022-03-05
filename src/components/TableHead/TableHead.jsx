import React from 'react';
import styles from './TableHead.module.css';

const TableHead = () => {
  return (
    <div className={styles.TableHead}>
        <div className={styles.TableHead__Item}>Продукты</div>
        <div className={styles.TableHead__Item}>Вес, гр</div>
        <div className={styles.TableHead__Item}>Бел, гр</div>
        <div className={styles.TableHead__Item}>Жир, гр</div>
        <div className={styles.TableHead__Item}>Угл, гр</div>
        <div className={styles.TableHead__Item}>Кал, ккал</div>
    </div>
  )
}

export default TableHead