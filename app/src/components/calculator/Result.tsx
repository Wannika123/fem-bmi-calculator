import styles from './Result.module.css'

type ResultProps = {
    bmi: string
    healthyWeightStr: string
} 

export default function Result({ bmi, healthyWeightStr }: ResultProps) {
    if (!bmi) {
        return (
            <div className={styles.container}>
                <div className={styles['welcome-container']}>
                    <h2>Welcome!</h2>
                    <p>
                        Enter your height and weight and you'll see your BMI result here
                    </p>
                </div>
            </div>
        )
    }

    const bmiNum = Number(bmi);

    let result: string;
    if (bmiNum < 18.5) {
        result = 'an underweight';
    } else if (bmiNum < 25) {
        result = 'a healthy weight';
    } else if (bmiNum < 30) {
        result = 'an overweight';
    } else {
        result = 'an obese'
    }
    
    return (
        <div className={styles.container}>
            <div className={styles['grid-container']}>
                <div>
                    <span className={styles['bmi-span']}>Your BMI is...</span>
                    <h1>{bmi}</h1>
                </div>
                <div>
                    <p>
                        Your BMI suggests you're {result}. 
                        Your ideal weight is between <span className={styles['healthy-weight']}>{healthyWeightStr}</span>.
                    </p>
                </div>
            </div>
        </div>
    )
}