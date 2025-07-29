import React, { useState, useEffect, createContext, useContext } from 'react'
import HomeScreen from './screens/HomeScreen'
import EthicalTranslatorScreen from './screens/EthicalTranslatorScreen'
import DocumentExplainerScreen from './screens/DocumentExplainerScreen'
import HelpMapScreen from './screens/HelpMapScreen'
import UsefulContactsScreen from './screens/UsefulContactsScreen'
import QuickPhrasesScreen from './screens/QuickPhrasesScreen'
import SOSScreen from './screens/SOSScreen'
import { translations } from './i18n/translations'

// --- Context i18n ---
const LanguageContext = createContext()
export const useTranslation = () => useContext(LanguageContext)

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('it')
  const t = (key) => translations[language]?.[key] || translations['en'][key] || key

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

// --- Content switch ---
function AppContent() {
  const [screen, setScreen] = useState('home')
  const navigate = (to) => setScreen(to)

  switch (screen) {
    case 'translator': return <EthicalTranslatorScreen onBack={() => navigate('home')} />
    case 'document':   return <DocumentExplainerScreen onBack={() => navigate('home')} />
    case 'map':        return <HelpMapScreen onBack={() => navigate('home')} />
    case 'contacts':   return <UsefulContactsScreen onBack={() => navigate('home')} />
    case 'phrases':    return <QuickPhrasesScreen onBack={() => navigate('home')} />
    case 'sos':        return <SOSScreen onBack={() => navigate('home')} />
    default:           return <HomeScreen onNavigate={navigate} />
  }
}

// --- App export ---
export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}
