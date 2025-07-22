// src/App.jsx
import React, { useState, useEffect, createContext, useContext } from 'react'
import {
  Mic, Camera, Shield, BookUser, ArrowLeft, Languages, FileText,
  HeartHandshake, HelpCircle, Siren, Sparkles, Copy, Volume2,
  X, Send, Map, Landmark, Search, Phone, ChevronDown
} from 'lucide-react'
import HomeScreen from './screens/HomeScreen'
import EthicalTranslatorScreen from './screens/EthicalTranslatorScreen'
import DocumentExplainerScreen from './screens/DocumentExplainerScreen'
import HelpMapScreen from './screens/HelpMapScreen'
import UsefulContactsScreen from './screens/UsefulContactsScreen'
import QuickPhrasesScreen from './screens/QuickPhrasesScreen'
import SOSScreen from './screens/SOSScreen'
import { translations } from './i18n/translations'

// --- Language Context (i18n) ---
const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('it')
  const t = (key) => translations[language]?.[key] || translations['en'][key]

  useEffect(() => {
    const rtl = ['ar']
    document.documentElement.dir = rtl.includes(language) ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useTranslation = () => useContext(LanguageContext)

// --- Main App Content ---
function AppContent() {
  const [screen, setScreen] = useState('home')
  const navigate = (name) => setScreen(name)

  switch (screen) {
    case 'translator':
      return <EthicalTranslatorScreen onBack={() => navigate('home')} />
    case 'document':
      return <DocumentExplainerScreen onBack={() => navigate('home')} />
    case 'map':
      return <HelpMapScreen onBack={() => navigate('home')} />
    case 'contacts':
      return <UsefulContactsScreen onBack={() => navigate('home')} />
    case 'phrases':
      return <QuickPhrasesScreen onBack={() => navigate('home')} />
    case 'sos':
      return <SOSScreen onBack={() => navigate('home')} />
    default:
      return <HomeScreen onNavigate={navigate} />
  }
}

// --- Exported App Component ---
export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}
