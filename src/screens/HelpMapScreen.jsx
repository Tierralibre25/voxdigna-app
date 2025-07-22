// src/screens/HelpMapScreen.jsx
import React, { useState } from 'react'
import { Map } from 'lucide-react'
import { useTranslation } from '../App'

const DATA = [
  { id:1, name:'Mensa Caritas', address:'Via delle Sette Sale, 30', category:'Mangiare' },
  { id:2, name:'Dormitorio Don Luigi', address:'Piazza degli Zingari,1', category:'Dormire' },
  { id:3, name:'Docce Pubbliche', address:'Via della Penitenza,25', category:'Lavarsi' },
  { id:4, name:'Ambulatorio Medico', address:'Via dei Reti,23', category:'Curarsi' }
]

export default function HelpMapScreen({ onBack }) {
  const { t } = useTranslation()
  const [filter, setFilter] = useState('Tutti')
  const filtered = DATA.filter(p => filter==='Tutti'||p.category===filter)

  return (
    <div style={{ padding: 20 }}>
      <button onClick={onBack}>{t('understood')}</button>
      <h2>{t('header_map')}</h2>
      <div style={{ margin: '10px 0' }}>
        {['Tutti','Mangiare','Dormire','Lavarsi','Curarsi'].map(cat => (
          <button
            key={cat}
            onClick={()=>setFilter(cat)}
            style={filter===cat?{fontWeight:'bold'}:{}}
          >
            {t(`map_${cat.toLowerCase()}`)}
          </button>
        ))}
      </div>
      <div>
        {filtered.map(p => (
          <div key={p.id} style={{ border:'1px solid #ccc', margin:5, padding:5 }}>
            <strong>{p.name}</strong><br/>
            <small>{p.address}</small>
          </div>
        ))}
      </div>
    </div>
  )
}
