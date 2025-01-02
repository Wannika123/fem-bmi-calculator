import { MetricInputType } from "./Calculator"
import styles from './Input.module.css'

type MetricProps = {
    metricInput: MetricInputType
    handleChange: (obj: Partial<MetricInputType>) => void
}

export default function MetricInput({ metricInput, handleChange }: MetricProps) {
    const handler = (
        e: React.ChangeEvent<HTMLInputElement>       
    ) => {
        if (Number(e.target.value) === 0) {
            handleChange({ [e.target.id]: undefined})
        } else {
            handleChange({ [e.target.id]: Number(e.target.value) })
        }
    }

    return (
        <div className={`${styles['grid-container']} ${styles['not-mobile']}`}>
            <div>
                <label htmlFor="cm" className={styles.label}>Height</label>
                <div className={styles['input-wrapper']}>
                    <input 
                        type="number" 
                        id="cm"
                        placeholder="0"
                        value={metricInput.cm} 
                        onChange={handler}
                    />
                    <span>cm</span>
                </div>
            </div>
            <div>
                <label htmlFor="kg" className={styles.label}>Weight</label>
                <div className={styles['input-wrapper']}>
                    <input 
                        type="number" 
                        id="kg"
                        placeholder="0"
                        value={metricInput.kg} 
                        onChange={handler}
                    />
                    <span>kg</span>
                </div>
            </div>
        </div>
    )
}