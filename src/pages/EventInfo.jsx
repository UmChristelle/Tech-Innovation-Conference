import { useNavigate } from 'react-router-dom'
import styles from './EventInfo.module.css'

const SPEAKERS = [
  { name: 'Sarah Chen', role: 'AI Research Lead, DeepMind', topic: 'Future of LLMs' },
  { name: 'Marcus Okafor', role: 'CTO, FinTech Startup', topic: 'Scaling Systems' },
  { name: 'Lena Kovalska', role: 'Web3 Architect', topic: 'Decentralized Apps' },
  { name: 'James Park', role: 'Senior SWE, Meta', topic: 'React Ecosystem' },
]

const HIGHLIGHTS = [
  { icon: '◈', label: '48 Talks', sub: 'Across 4 tracks' },
  { icon: '◉', label: '2,000+ Devs', sub: 'Expected attendees' },
  { icon: '◆', label: '3 Days', sub: 'Sep 12–14, 2025' },
  { icon: '◍', label: 'Kigali', sub: 'Convention Centre' },
]

export default function EventInfo() {
  const navigate = useNavigate()

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroNoise} />
        <div className={styles.badge}>
          <span className={styles.dot2} />
          Registration Open
        </div>
        <h1 className={`${styles.title} animate`}>
          TECH<br /><span>INNOVATION</span><br />CONFERENCE
        </h1>
        <p className={`${styles.sub} animate animate-d2`}>
          Where Africa's brightest minds in technology converge to shape tomorrow.
        </p>
        <div className={`${styles.meta} animate animate-d3`}>
          <span>📅 September 12–14, 2025</span>
          <span>📍 Kigali Convention Centre, Rwanda</span>
        </div>
        <button className={`${styles.cta} animate animate-d4`} onClick={() => navigate('/register')}>
          Register Now <span>→</span>
        </button>
      </section>

      <section className={styles.stats}>
        {HIGHLIGHTS.map(({ icon, label, sub }) => (
          <div key={label} className={styles.statCard}>
            <span className={styles.statIcon}>{icon}</span>
            <strong>{label}</strong>
            <small>{sub}</small>
          </div>
        ))}
      </section>

      <section className={styles.about}>
        <div className={styles.aboutText}>
          <p className={styles.eyebrow}>About the Event</p>
          <h2>Build. Ship.<br />Inspire.</h2>
          <p>TechConf 2025 is the premier gathering for developers, designers, entrepreneurs, and tech enthusiasts across Africa and beyond. Over three immersive days, explore the latest in AI, Web3, cloud infrastructure, and product design.</p>
          <ul className={styles.perks}>
            {['Networking with 2,000+ professionals', 'Hands-on coding workshops', 'Startup pitch competition', 'Exclusive swag & resources'].map(p => (
              <li key={p}><span className={styles.check}>✦</span> {p}</li>
            ))}
          </ul>
        </div>
        <div className={styles.imageGrid}>
          <div className={styles.imgBox} style={{ background: 'linear-gradient(135deg,#1a2a1a,#0a3a0a)' }}>
            <span>💻</span><p>Workshops</p>
          </div>
          <div className={styles.imgBox} style={{ background: 'linear-gradient(135deg,#2a1a1a,#3a0a0a)' }}>
            <span>🎤</span><p>Keynotes</p>
          </div>
          <div className={styles.imgBox} style={{ background: 'linear-gradient(135deg,#1a1a2a,#0a0a3a)' }}>
            <span>🤝</span><p>Networking</p>
          </div>
          <div className={styles.imgBox} style={{ background: 'linear-gradient(135deg,#2a2a1a,#3a3a0a)' }}>
            <span>🚀</span><p>Startup Pitches</p>
          </div>
        </div>
      </section>

      <section className={styles.speakers}>
        <p className={styles.eyebrow}>Featured Speakers</p>
        <h2 className={styles.sectionTitle}>Voices That Shape Tech</h2>
        <div className={styles.speakerGrid}>
          {SPEAKERS.map(({ name, role, topic }) => (
            <div key={name} className={styles.speakerCard}>
              <div className={styles.avatar}>{name.split(' ').map(n => n[0]).join('')}</div>
              <div>
                <strong>{name}</strong>
                <p>{role}</p>
                <span className={styles.topicTag}>{topic}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.tickets}>
        {[
          { type: 'Student', price: 'Free', perks: ['All keynotes', 'Workshop access', 'Digital certificate'] },
          { type: 'Standard', price: '$49', perks: ['Everything in Student', 'Lunch included', 'Networking events'], hot: true },
          { type: 'VIP', price: '$149', perks: ['Everything in Standard', 'Speaker meet & greet', 'Premium seating'] },
        ].map(({ type, price, perks, hot }) => (
          <div key={type} className={`${styles.ticketCard} ${hot ? styles.ticketHot : ''}`}>
            {hot && <span className={styles.hotBadge}>Most Popular</span>}
            <p className={styles.ticketType}>{type}</p>
            <p className={styles.ticketPrice}>{price}</p>
            <ul>{perks.map(p => <li key={p}>✓ {p}</li>)}</ul>
            <button className={hot ? styles.ctaFill : styles.ctaOutline} onClick={() => navigate('/register')}>
              Get Ticket
            </button>
          </div>
        ))}
      </section>

      <div className={styles.finalCta}>
        <h2>Ready to join the movement?</h2>
        <button className={styles.cta} onClick={() => navigate('/register')}>
          Secure Your Spot <span>→</span>
        </button>
      </div>
    </main>
  )
}