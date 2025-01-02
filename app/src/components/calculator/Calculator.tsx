import { findBMI, feetInchToCm, stonePoundToKg, findHealthyWeight, kgToStonePound } from '../../utils/calculateBMI'
import { useEffect, useState } from 'react'
import styles from './Calculator.module.css'
import MetricInput from './MetricInput'
import ImperialInput from './ImperialInput'
import Result from './Result'

export type MetricInputType = {
    cm: number | undefined
    kg: number | undefined
}

export type ImperialInputType = {
    ft: number | undefined
    in: number | undefined
    st: number | undefined
    lbs: number | undefined
}

export default function Calculator() {

    const [method, setMethod] = useState<'Metric' | 'Imperial'>('Metric')

    const [metricInput, setMetricInput] = useState<MetricInputType>({
        cm: undefined,
        kg: undefined
    })

    const [imperialInput, setImperialInput] = useState<ImperialInputType>({
        ft: undefined,
        in: undefined,
        st: undefined,
        lbs: undefined
    })

    const [bmiResults, setBmiResults] = useState({
        metric: '',
        imperial: ''
    })

    const [healthyWeightStr, setHealthyWeightStr] = useState({
        metric: '',
        imperial: ''
    })

    const handleMetricChange = (obj: Partial<MetricInputType>) => {
        setMetricInput(state => { 
            return {...state, ...obj }
        })
    }

    const handleImperialChange = (obj: Partial<ImperialInputType>) => {
        setImperialInput(state => { 
            return {...state, ...obj }
        })
    }

    // Calculate metric bmi
    useEffect(() => {
        if (!metricInput.cm || !metricInput.kg) return

        const bmi = findBMI(metricInput.kg, metricInput.cm);

        setBmiResults(state => {
            return {...state, metric: bmi}
        })

        const [lowerBound, upperBound] = findHealthyWeight(metricInput.cm);

        setHealthyWeightStr(state => {
            return {...state, metric: `${lowerBound.toFixed(1)}kgs - ${upperBound.toFixed(1)}kgs`}
        })
    }, [metricInput])

    // Calculate imperial bmi
    useEffect(() => {
        if (!imperialInput.ft || !imperialInput.in || !imperialInput.lbs || !imperialInput.st) return
    
        const kg = stonePoundToKg(imperialInput.st, imperialInput.lbs);
        const cm = feetInchToCm(imperialInput.ft, imperialInput.in);

        const bmi = findBMI(kg, cm);

        setBmiResults(state => {
            return {...state, imperial: bmi}
        })

        const [lowerBound, upperBound] = findHealthyWeight(cm);
        const [lowerBoundSt, lowerBoundLbs] = kgToStonePound(lowerBound);
        const [upperBoundSt, upperBoundLbs] = kgToStonePound(upperBound);

        setHealthyWeightStr(state => {
            return {...state, imperial: `${lowerBoundSt}st ${lowerBoundLbs}lbs - ${upperBoundSt}st ${upperBoundLbs}lbs`}
        })
    }, [imperialInput])

    return (
        <div className={styles.container}>
            <h2>Enter your details below</h2>
            <form>
                <div className={styles['grid-container']}>
                    <label className={styles.label} htmlFor='Metric'>
                        <input 
                            type='radio' 
                            id='Metric'
                            value='Metric'
                            name='method'
                            checked={method === 'Metric'}
                            onChange={() => setMethod('Metric')}
                        />
                        Metric
                    </label>
                    <label className={styles.label} htmlFor='Imperial'>
                        <input 
                            type='radio' 
                            id='Imperial'
                            value='Imperial'
                            name='method'
                            checked={method === 'Imperial'}
                            onChange={() => setMethod('Imperial')}
                        />
                        Imperial
                    </label>
                </div>
                { method === 'Metric' && 
                    <MetricInput 
                        metricInput={metricInput} 
                        handleChange={handleMetricChange}
                    />
                }
                { method === 'Imperial' && 
                    <ImperialInput 
                        imperialInput={imperialInput}
                        handleChange={handleImperialChange}
                    />
                }
            </form>
            <Result
                bmi={method === 'Metric' ? bmiResults.metric : bmiResults.imperial}
                healthyWeightStr={method === 'Metric' 
                    ? healthyWeightStr.metric
                    : healthyWeightStr.imperial
                }
            />
        </div>
    )
}