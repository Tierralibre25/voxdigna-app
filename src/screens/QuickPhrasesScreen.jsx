import React from 'react'
import { useTranslation } from '../App'

export default function QuickPhrasesScreen({ onBack }) {
  const { t } = useTranslation()
  return (
    <div style={{ padding: 20 }}>
      <button onClick={onBack}>← {t('back')}</button>
      <h2>{t('screen_phrases_title')}</h2>
    </div>
  )
}
