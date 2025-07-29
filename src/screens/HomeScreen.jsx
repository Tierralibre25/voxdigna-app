import React from 'react'
import { useTranslation } from '../App'
import { Sparkles, FileText, Map, Landmark, BookOpen, Shield } from 'lucide-react'

export default function HomeScreen({ onNavigate }) {
  const { t } = useTranslation()
  const buttons = [
    { key: 'translator', icon: <Sparkles size={36} />, label: t('btn_translator') },
    { key: 'document',   icon: <FileText size={36} />,  label: t('btn_document')   },
    { key: 'map',        icon: <Map size={36} />,       label: t('btn_map')        },
    { key: 'contacts',   icon: <Landmark size={36} />,  label: t('btn_contacts')   },
    { key: 'phrases',    icon: <BookOpen size={36} />,  label: t('btn_phrases')    },
    { key: 'sos',        icon: <Shield size={36} />,    label: t('btn_sos')        },
  ]

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: '0 auto' }}>
      <h1>{t('home_title')}</h1>
      <p>{t('home_subtitle')}</p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16,
        marginTop: 24
      }}>
        {buttons.map(b => (
          <button
            key={b.key}
            onClick={() => onNavigate(b.key)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 16,
              fontSize: 14,
              background: '#f9f9f9',
              border: '1px solid #ddd',
              borderRadius: 8,
              cursor: 'pointer'
            }}
          >
            {b.icon}
            <div style={{ marginTop: 8 }}>{b.label}</div>
          </button>
        ))}
      </div>
    </div>
)
}
