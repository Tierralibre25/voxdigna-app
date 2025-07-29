import React from 'react'
import { useTranslation } from '../App'

export default function SOSScreen({ onBack }) {
  const { t } = useTranslation()
  return (
    <div style={{ padding: 20 }}>
      <button onClick={onBack}>← {t('back')}</button>
      <h2>{t('screen_sos_title')}</h2>
    </div>
  )
}
