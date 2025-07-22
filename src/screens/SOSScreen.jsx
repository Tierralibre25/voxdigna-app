// src/screens/SOSScreen.jsx
import React from 'react'
import { Shield, HeartHandshake, HelpCircle } from 'lucide-react'
import { useTranslation } from '../App'

export default function SOSScreen({ onBack }) {
  const { t } = useTranslation()
  const items = [
    { key:'threatened', icon:<Shield size={24}/>, text:t('sos_threatened') },
    { key:'medical',    icon:<HeartHandshake size={24}/>, text:t('sos_medical') },
    { key:'lawyer',     icon:<HelpCircle size={24}/>, text:t('sos_lawyer') },
  ]
  return (
    <div style={{ padding: 20, background:'#fee', minHeight:'100vh' }}>
      <button onClick={onBack}>{t('understood')}</button>
      <h2>{t('header_sos')}</h2>
      <p>{t('sos_warning_text')}</p>
      {items.map(i=>(
        <button
          key={i.key}
          onClick={()=>alert(i.text)}
          style={{ display:'block', margin:8, padding:12, background:'#fdd' }}
        >
          {i.icon} {i.text}
        </button>
      ))}
    </div>
  )
}
