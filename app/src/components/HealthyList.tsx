import eatIcon from '../assets/images/icon-eating.svg'
import exerciseIcon from '../assets/images/icon-exercise.svg'
import sleepIcon from '../assets/images/icon-sleep.svg'
import styles from './HealthyList.module.css'

export default function HealthyList() {
    
    return (
        <section className={styles.container}>

            <div className={styles.bg}></div>

            <div className={['center', styles['grid-container']].join(' ')}>

                <div className={styles['grid-child']}>
                    <div>
                        <img src={eatIcon} alt='eating icon' />
                    </div>
                    <div>
                        <h3>Healthy eating</h3>
                        <p>
                            Healthy eating promotes weight control, disease prevention, better digestion, 
                            immunity, mental clarity, and mood.
                        </p>
                    </div>
                </div>

                <div className={styles['grid-child']}>
                    <div>
                        <img src={exerciseIcon} alt='exercise icon' />
                    </div>
                    <div>
                        <h3>Regular exercise</h3>
                        <p>
                            Exercise improves fitness, aids weight control, elevates mood, and reduces disease 
                            risk, fostering wellness and longevity.
                        </p>
                    </div>
                </div>

                <div className={styles['grid-child']}>
                    <div>
                        <img src={sleepIcon} alt='sleeping icon' />
                    </div>
                    <div>
                        <h3>Adequate sleep</h3>
                        <p>
                            Sleep enhances mental clarity, emotional stability, and physical wellness, promoting 
                            overall restoration and rejuvenation.
                        </p>
                    </div>
                </div>

            </div>
            
        </section>
    )
}