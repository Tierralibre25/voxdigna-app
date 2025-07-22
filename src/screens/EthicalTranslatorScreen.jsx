// src/screens/EthicalTranslatorScreen.jsx
import React, { useState } from 'react'
import { Sparkles, X, Mic, Copy, Volume2 } from 'lucide-react'
import { useTranslation } from '../App'

export default function EthicalTranslatorScreen({ onBack }) {
  const { t } = useTranslation()
  const [inputText, setInputText] = useState('')
  const [result, setResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleTranslate = () => {
    if (!inputText.trim()) return
    setIsLoading(true)
    // simulazione API
    setTimeout(() => {
      setResult({
        formal: `${inputText} (formal)`,
        colloquial: `${inputText} (colloquial)`,
      })
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div style={{ padding: 20 }}>
      <button onClick={onBack}>{t('understood')}</button>
      <h2>{t('header_translator')}</h2>
      <textarea
        placeholder={t('translator_placeholder')}
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        style={{ width: '100%', height: 100 }}
      />
      <button onClick={handleTranslate} disabled={isLoading}>
        {isLoading ? t('translator_processing') : t('translator_rephrase_button')}
      </button>
      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>{t('translator_formal_version')}</h3>
          <p>{result.formal}</p>
          <h3>{t('translator_colloquial_version')}</h3>
          <p>{result.colloquial}</p>
        </div>
      )}
    </div>
  )
}
