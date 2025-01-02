import { ImperialInputType } from './Calculator'
import styles from './Input.module.css'

type ImperialInputProps = {
    imperialInput: ImperialInputType
    handleChange: (obj: Partial<ImperialInputType>) => void
}

export default function ImperialInput({ imperialInput, handleChange }: ImperialInputProps) {
    const handler = (
        e: React.ChangeEvent<HTMLInputElement>       
    ) => {
        if (Number(e.target.value) === 0) {
            handleChange({ [e.target.id]: undefined})  // remove leading 0 in input[type=number]
        } else {
            handleChange({ [e.target.id]: Number(e.target.value) })
        }
    }

    return (
        <div className={styles.container}>
            <div>
                <label htmlFor='ft'  className={styles.label}>Height</label>
                <div className={styles['grid-container']}>
                    <div className={styles['input-wrapper']}>
                        <input 
                            type="number" 
                            id="ft"
                            placeholder="0"
                            value={imperialInput.ft} 
                            onChange={handler}
                        />
                        <span>ft</span>
                    </div>
                    <div className={styles['input-wrapper']}>
                        <input 
                            type="number" 
                            id="in"
                            placeholder="0"
                            value={imperialInput.in} 
                            onChange={handler}
                        />
                        <span>in</span>
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor='st'  className={styles.label}>Weight</label>
                <div className={styles['grid-container']}>
                    <div className={styles['input-wrapper']}>
                        <input 
                            type="number" 
                            id="st"
                            placeholder="0"
                            value={imperialInput.st} 
                            onChange={handler}
                        />
                        <span>st</span>
                    </div>
                    <div className={styles['input-wrapper']}>
                        <input 
                            type="number" 
                            id="lbs"
                            placeholder="0"
                            value={imperialInput.lbs} 
                            onChange={handler}
                        />
                        <span>lbs</span>
                    </div>
                </div>
            </div>
        </div>
    )
}