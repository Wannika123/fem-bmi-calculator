import Calculator from "./calculator/Calculator";
import styles from './Intro.module.css'

export default function Intro() {
    return (
        <section className={['center', styles.container].join(' ')}>
            <div className={styles['text-container']}>
                <h1>Body Mass Index Calculator</h1>
                <p>
                  Better understand your weight in relation to your height using our 
                  body mass index (BM) calculator. While BMI is not the sole determinant 
                  of a healthy weight, it offers a valuable starting point to evaluate 
                  your overall health and well-being.
                </p>
            </div>
            <Calculator />
        </section>
    )
}