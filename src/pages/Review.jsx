import { useNavigate } from 'react-router-dom'
import Stepper from '../components/Stepper'
import styles from './Review.module.css'

const LABELS = {
  fullName: 'Full Name', email: 'Email', phone: 'Phone',
  organization: 'Organization', ticketType: 'Ticket Type',
  dietary: 'Dietary Requirements', notes: 'Additional Notes',
}

export default function Review({ formData, saveRegistration }) {
  const navigate = useNavigate()

  const handleConfirm = () => {
    saveRegistration()
    navigate('/confirmation')
  }

  return (
    <main className={styles.main}>
      <Stepper current={2} />
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Step 3 of 4</p>
          <h1>Review Your Details</h1>
          <p className={styles.sub}>Everything look correct? Confirm to lock in your spot.</p>
        </div>
        <div className={styles.card}>
          <div className={styles.ticketBadge}>
            <span className={styles.ticketLabel}>{formData.ticketType}</span>
            <span>TechConf 2026</span>
          </div>
          <div className={styles.grid}>
            {Object.entries(LABELS).map(([key, label]) => (
              formData[key] && (
                <div key={key} className={styles.row}>
                  <span className={styles.rowLabel}>{label}</span>
                  <span className={styles.rowValue}>{formData[key]}</span>
                </div>
              )
            ))}
          </div>
        </div>
        <div className={styles.actions}>
          <button className={styles.back} onClick={() => navigate('/register')}>← Edit Info</button>
          <button className={styles.confirm} onClick={handleConfirm}>Confirm Registration ✓</button>
        </div>
      </div>
    </main>
  )
}