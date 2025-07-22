// src/screens/UsefulContactsScreen.jsx
import React, { useState } from 'react'
import { useTranslation } from '../App'

const CONTACTS = [
  { country:'Marocco',embassy:'+39 06 855080',consulate:'+39 02 66806935' },
  { country:'Romania',embassy:'+39 06 83523300',consulate:'+39 02 57414070' },
  { country:'Albania',embassy:'+39 06 86224110',consulate:'+39 02 8051471' },
  { country:'Cina',embassy:'+39 06 96524200',consulate:'+39 02 3288231' },
  { country:'Ucraina',embassy:'+39 06 8412630',consulate:'+39 02 86995789' },
]

export default function UsefulContactsScreen({ onBack }) {
  const { t } = useTranslation()
  const [search, setSearch] = useState('')
  const list = CONTACTS.filter(c=>c.country.toLowerCase().includes(search.toLowerCase()))

  return (
    <div style={{ padding: 20 }}>
      <button onClick={onBack}>{t('understood')}</button>
      <h2>{t('header_contacts')}</h2>
      <input
        placeholder={t('contacts_search')}
        value={search}
        onChange={e=>setSearch(e.target.value)}
        style={{ width:'100%', margin:'10px 0' }}
      />
      <div>
        {list.map(c=>(
          <div key={c.country} style={{ border:'1px solid #ccc', padding:8, margin:4 }}>
            <strong>{c.country}</strong><br/>
            <small><strong>{t('contacts_embassy')}</strong> {c.embassy}</small><br/>
            <small><strong>{t('contacts_consulate')}</strong> {c.consulate}</small>
          </div>
        ))}
      </div>
    </div>
  )
}
