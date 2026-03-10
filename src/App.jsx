import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useRegistration } from './hooks/useRegistration'
import Navbar from './components/Navbar'
import EventInfo from './pages/EventInfo'
import Register from './pages/Register'
import Review from './pages/Review'
import Confirmation from './pages/Confirmation'
import Submitted from './pages/Submitted'

function RegistrationGuard({ isRegistered, children }) {
  return isRegistered ? <Navigate to="/submitted" replace /> : children
}

export default function App() {
  const { formData, updateField, saveRegistration, cancelRegistration, isRegistered } = useRegistration()

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={isRegistered ? <Navigate to="/submitted" replace /> : <EventInfo />} />
        <Route path="/register" element={<RegistrationGuard isRegistered={isRegistered}><Register formData={formData} updateField={updateField} /></RegistrationGuard>} />
        <Route path="/review" element={<RegistrationGuard isRegistered={isRegistered}><Review formData={formData} saveRegistration={saveRegistration} /></RegistrationGuard>} />
        <Route path="/confirmation" element={<Confirmation formData={formData} />} />
        <Route path="/submitted" element={isRegistered ? <Submitted formData={formData} cancelRegistration={cancelRegistration} /> : <Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}