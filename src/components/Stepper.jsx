import styles from './Stepper.module.css'

const STEPS = ['Info', 'Register', 'Review', 'Confirm']

export default function Stepper({ current }) {
  return (
    <div className={styles.wrapper}>
      {STEPS.map((label, i) => (
        <div key={label} className={styles.item}>
          <div className={`${styles.dot} ${i < current ? styles.done : ''} ${i === current ? styles.active : ''}`}>
            {i < current ? '✓' : i + 1}
          </div>
          <span className={`${styles.label} ${i === current ? styles.activeLabel : ''}`}>{label}</span>
          {i < STEPS.length - 1 && <div className={`${styles.line} ${i < current ? styles.lineDone : ''}`} />}
        </div>
      ))}
    </div>
  )
}