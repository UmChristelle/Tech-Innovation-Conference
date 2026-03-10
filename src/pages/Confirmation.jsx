import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Stepper from '../components/Stepper'
import styles from './Confirmation.module.css'

export default function Confirmation({ formData }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (!formData.fullName) navigate('/')
  }, [])

  return (
    <main className={styles.main}>
      <Stepper current={3} />
      <div className={styles.container}>
        <div className={styles.icon}>✓</div>
        <p className={styles.eyebrow}>Registration Confirmed</p>
        <h1>You're in, {formData.fullName.split(' ')[0]}!</h1>
        <p className={styles.sub}>
          Your <strong>{formData.ticketType}</strong> ticket for TechConf 2026 has been reserved.
          We've saved your details. See you September 12–14 in Kigali!
        </p>
        <div className={styles.summary}>
          <div className={styles.summaryRow}><span>Name</span><span>{formData.fullName}</span></div>
          <div className={styles.summaryRow}><span>Email</span><span>{formData.email}</span></div>
          <div className={styles.summaryRow}><span>Ticket</span><span className={styles.badge}>{formData.ticketType}</span></div>
        </div>
        <p className={styles.note}> Your registration is saved in your browser. Visit anytime to view your details.</p>
        <button className={styles.home} onClick={() => navigate('/')}>← Back to Event</button>
      </div>
    </main>
  )
}