import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Stepper from '../components/Stepper'
import styles from './Register.module.css'

const FIELDS = [
  { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Ada Lovelace', required: true },
  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'ada@example.com', required: true },
  { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+250 700 000 000', required: true },
  { id: 'organization', label: 'Organization / Institution', type: 'text', placeholder: 'Your company or school', required: false },
]

const TICKETS = ['Standard', 'VIP', 'Student']
const DIETARY = ['None', 'Vegetarian', 'Vegan', 'Halal', 'Gluten-Free', 'Other']

export default function Register({ formData, updateField }) {
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!formData.fullName.trim()) e.fullName = 'Name is required'
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required'
    if (!formData.phone.trim()) e.phone = 'Phone number is required'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    navigate('/review')
  }

  return (
    <main className={styles.main}>
      <Stepper current={1} />
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Step 2 of 4</p>
          <h1>Your Details</h1>
          <p className={styles.sub}>Fill in your information to reserve your spot.</p>
        </div>
        <div className={styles.form}>
          {FIELDS.map(({ id, label, type, placeholder, required }) => (
            <div key={id} className={styles.field}>
              <label>{label} {required && <span className={styles.req}>*</span>}</label>
              <input
                type={type}
                placeholder={placeholder}
                value={formData[id]}
                onChange={e => { updateField(id, e.target.value); setErrors(p => ({ ...p, [id]: '' })) }}
                className={errors[id] ? styles.inputError : ''}
              />
              {errors[id] && <span className={styles.error}>{errors[id]}</span>}
            </div>
          ))}
          <div className={styles.field}>
            <label>Ticket Type <span className={styles.req}>*</span></label>
            <div className={styles.ticketGroup}>
              {TICKETS.map(t => (
                <button
                  key={t}
                  type="button"
                  className={`${styles.ticketBtn} ${formData.ticketType === t ? styles.ticketActive : ''}`}
                  onClick={() => updateField('ticketType', t)}
                >
                  {t}{t === 'VIP' && <span className={styles.vipBadge}>★</span>}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.field}>
            <label>Dietary Requirements</label>
            <select value={formData.dietary} onChange={e => updateField('dietary', e.target.value)}>
              {DIETARY.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          <div className={styles.field}>
            <label>Additional Notes</label>
            <textarea
              placeholder="Any accessibility needs, questions, or comments..."
              value={formData.notes}
              onChange={e => updateField('notes', e.target.value)}
              rows={3}
            />
          </div>
          <div className={styles.actions}>
            <button className={styles.back} onClick={() => navigate('/')}>← Back</button>
            <button className={styles.next} onClick={handleSubmit}>Review Registration →</button>
          </div>
        </div>
      </div>
    </main>
  )
}