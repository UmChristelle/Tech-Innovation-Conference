import { useState, useEffect } from 'react'

const STORAGE_KEY = 'techconf_registration'

const defaultForm = {
  fullName: '', email: '', phone: '', organization: '',
  ticketType: 'Standard', dietary: '', notes: '',
}

export function useRegistration() {
  const [formData, setFormData] = useState(defaultForm)
  const [isRegistered, setIsRegistered] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      setFormData(JSON.parse(saved))
      setIsRegistered(true)
    }
  }, [])

  const updateField = (field, value) =>
    setFormData(prev => ({ ...prev, [field]: value }))

  const saveRegistration = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    setIsRegistered(true)
  }

  const cancelRegistration = () => {
    localStorage.removeItem(STORAGE_KEY)
    setFormData(defaultForm)
    setIsRegistered(false)
  }

  return { formData, updateField, saveRegistration, cancelRegistration, isRegistered }
}