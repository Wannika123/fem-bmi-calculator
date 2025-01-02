import genderIcon from '../assets/images/icon-gender.svg'
import ageIcon from '../assets/images/icon-age.svg'
import muscleIcon from '../assets/images/icon-muscle.svg'
import pregnancyIcon from '../assets/images/icon-pregnancy.svg'
import raceIcon from '../assets/images/icon-race.svg'
import styles from './Limit.module.css'

const LIST = [
    {
        icon: genderIcon,
        header: 'Gender',
        description: 'The development and body fat composition of girls and boys vary with age. Consequently, a child\'s age and gender are considered when evaluating their BMI.'
    },
    {
        icon: ageIcon,
        header: 'Age',
        description: 'In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.'
    },
    {
        icon: muscleIcon,
        header: 'Muscle',
        description: 'BMI may misclassify muscular individuals as overweight or obese, as it doesn\'t differentiate muscle from fat.'
    },
    {
        icon: pregnancyIcon,
        header: 'Pregnancy',
        description: 'Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.'
    },
    {
        icon: raceIcon,
        header: 'Race',
        description: 'Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.'
    },
]

export default function Limit() {
    return (
        <section className={[styles.container, 'center'].join(' ')}>

            <div className={styles['text-container']}>
                <h2>Limitations of BMI</h2>
                <p>
                    Although BMI is often a practical indicator of healthy weight, it is not suited for 
                    every person. Specific groups should carefully consider their BMI outcomes, and in 
                    certain cases, the measurement may not be beneficial to use.
                </p>
            </div>

            <div className={styles.lists}>
                {LIST.map(obj => (
                    <div key={obj.header} className={styles.list}>
                        <div className={styles['header-wrapper']}>
                            <div>
                                <img src={obj.icon} alt={`${obj.header} icon`} />
                            </div>
                            <h4>{obj.header}</h4>
                        </div>
                        <p>{obj.description}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}