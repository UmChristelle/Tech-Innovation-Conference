import { useNavigate } from 'react-router-dom'
import styles from './Submitted.module.css'

const LABELS = {
  fullName: 'Full Name', email: 'Email', phone: 'Phone',
  organization: 'Organization', ticketType: 'Ticket', dietary: 'Dietary', notes: 'Notes',
}

export default function Submitted({ formData, cancelRegistration }) {
  const navigate = useNavigate()

  const handleCancel = () => {
    if (confirm('Cancel your registration? This cannot be undone.')) {
      cancelRegistration()
      navigate('/')
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <span className={styles.dot} />
          You're already registered
        </div>
        <h1 className={styles.title}>Welcome Back, <br />{formData.fullName.split(' ')[0]}.</h1>
        <p className={styles.sub}>Here's your TechConf 2026 registration summary.</p>
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <span className={styles.ticketType}>{formData.ticketType} Ticket</span>
            <span className={styles.event}>TechConf 2026 · Sep 12–14</span>
          </div>
          {Object.entries(LABELS).map(([key, label]) =>
            formData[key] && key !== 'ticketType' ? (
              <div key={key} className={styles.row}>
                <span>{label}</span>
                <span>{formData[key]}</span>
              </div>
            ) : null
          )}
        </div>
        <div className={styles.actions}>
          <button className={styles.edit} onClick={() => navigate('/register')}>✏ Edit Registration</button>
          <button className={styles.cancel} onClick={handleCancel}>✕ Cancel Registration</button>
        </div>
      </div>
    </main>
  )
}