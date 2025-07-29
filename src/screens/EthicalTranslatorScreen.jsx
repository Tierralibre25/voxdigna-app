import React from 'react'
import { useTranslation } from '../App'

export default function EthicalTranslatorScreen({ onBack }) {
  const { t } = useTranslation()
  return (
    <div style={{ padding: 20 }}>
      <button onClick={onBack}>← {t('back')}</button>
      <h2>{t('screen_translator_title')}</h2>
    </div>
  )
}
