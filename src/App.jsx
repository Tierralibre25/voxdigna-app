// src/App.jsx
 import React, { useState } from 'react';
-import { translations } from './i18n/translations';
+import { translations } from './i18n/translations';
+import HomeScreen from './screens/HomeScreen';
import React, { useState, useEffect, createContext, useContext } from 'react';
import {
  Mic, Camera, Shield, BookUser, ArrowLeft, Languages, FileText,
  HeartHandshake, HelpCircle, Siren, Sparkles, Copy, Volume2,
  X, Send, Map, Landmark, Search, Phone, ChevronDown
} from 'lucide-react';
import { translations } from './i18n/translations';

// **Context per la lingua**
const LanguageContext = createContext();
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('it');
  const t = (key) => translations[language]?.[key] || translations['en'][key];
  useEffect(() => {
    const rtl = ['ar'];
    document.documentElement.dir = rtl.includes(language) ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
const useTranslation = () => useContext(LanguageContext);

// **Componenti e Schermate** (copia esattamente dal tuo file originale)
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// Esempio di componente Header:
const Header = ({ titleKey, onBack }) => {
  const { t } = useTranslation();
  return (
    <header className="bg-white p-4 flex items-center sticky top-0">
      <button onClick={onBack}><ArrowLeft /></button>
      <h1>{t(titleKey)}</h1>
    </header>
  );
};

// Altri componenti: MenuButton, HomeScreen, TranslatorScreen, DocumentScreen, MapScreen, ContactsScreen, PhrasesScreen, SOSScreen
// (incolla qui le definizioni complete dal codice di Willy)

// **Contenitore principale**
function AppContent() {
  const [screen, setScreen] = useState('home');
  const { t } = useTranslation();
  const navigate = (name) => setScreen(name);

  switch (screen) {
    case 'translator':
      return <EthicalTranslatorScreen onBack={() => navigate('home')} />;
    // aggiungi tutti gli altri case...
    default:
      return <HomeScreen onNavigate={navigate} />;
  }
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
