import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Form.module.css";

const Form = ({ setActiveForm, food, setFood, id, setId }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let foodArray = [];

    const onSubmit = (data) => {
        if (food.length > 0) foodArray = [...food];

        const countedData = {
            food: data.food,
            weight: data.weight,
            protein: data.protein * data.weight / 100,
            fat: data.fat * data.weight / 100,
            carb: data.carb * data.weight / 100,
            calories: data.calories * data.weight / 100,
        }

        foodArray.push(countedData);
        setFood(foodArray);
        setActiveForm(false);
        setId(id + 1);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
            <input {...register("id")} type="hidden" value={id} />

            <label>Продукт</label>
            <input
                className={styles.Form__Input}
                {...register("food", { required: true })}
            />
            {errors.food &&
                <span className={styles.Form__Message}>Заполните поле</span>
            }

            <label>Вес, гр</label>
            <input
                className={styles.Form__Input}
                {...register("weight", { required: true })}
            />
            {errors.weight &&
                <span className={styles.Form__Message}>Заполните поле</span>
            }

            <label>Бел, 100 гр</label>
            <input
                className={styles.Form__Input}
                {...register("protein", { required: true })}
            />
            {errors.protein &&
                <span className={styles.Form__Message}>Заполните поле</span>
            }

            <label>Жир, 100 гр</label>
            <input
                className={styles.Form__Input}
                {...register("fat", { required: true })}
            />
            {errors.fat &&
                <span className={styles.Form__Message}>Заполните поле</span>
            }

            <label>Угл, 100 гр</label>
            <input
                className={styles.Form__Input}
                {...register("carb", { required: true })}
            />
            {errors.carb &&
                <span className={styles.Form__Message}>Заполните поле</span>
            }

            <label>Кал, ккал на 100 гр</label>
            <input
                className={styles.Form__Input}
                {...register("calories", { required: true })}
            />
            {errors.calories &&
                <span className={styles.Form__Message}>Заполните поле</span>
            }

            <button className={styles.Form__Submit} type="submit">Добавить</button>
        </form>
    );
}

export default Form