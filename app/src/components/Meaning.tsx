import manPhoto from '../assets/images/image-man-eating.webp'
import styles from './Meaning.module.css'

export default function Meaning() {
    return (
        <section className={['center', styles.container].join(' ')}>
            <div className={styles['img-container']}>
                <img src={manPhoto} alt='A healthy-looking man eating healthy food.' />
            </div>
            <div className={styles['text-container']}>
                <h2>What your BMI result means</h2>
                <p>
                    A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a 
                    healthy weight may lower your chances of experiencing health issues later on, 
                    such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced 
                    fat and sugar content, incorporating ample fruits and vegetables. Additionally, 
                    strive for regular physical activity, ideally about 30 minutes daily for 
                    five days a week.
                </p>
            </div>
        </section>
    )
}