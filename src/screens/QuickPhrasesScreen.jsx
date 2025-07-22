// src/screens/QuickPhrasesScreen.jsx
import React from 'react'
import { useTranslation } from '../App'

const PHRASES = {
  'Diritti e Lavoro': [
    { it:'Qual è il mio orario di lavoro?', en:'What are my working hours?' },
    { it:'Ho diritto a una pausa?', en:'Am I entitled to a break?' },
  ],
  'Salute e Sicurezza': [
    { it:'Non mi sento bene, ho bisogno di un medico.', en:"I don't feel well, I need a doctor." },
    { it:'Questo lavoro non è sicuro.', en:"This work is not safe." },
  ]
}

export default function QuickPhrasesScreen({ onBack }) {
  const { t } = useTranslation()
  return (
    <div style={{ padding: 20 }}>
      <button onClick={onBack}>{t('understood')}</button>
      <h2>{t('header_phrases')}</h2>
      {Object.entries(PHRASES).map(([cat, arr])=>(
        <div key={cat}>
          <h3>{cat}</h3>
          {arr.map((p,i)=>
            <button key={i} onClick={()=>alert(p.it)} style={{ display:'block', margin:4 }}>
              {p.it}<br/><small>{p.en}</small>
            </button>
          )}
        </div>
      ))}
    </div>
  )
}
