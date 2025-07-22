import React, { useState } from 'react'
import { FileText, Camera } from 'lucide-react'
import { useTranslation } from '../App'

export default function DocumentExplainerScreen({ onBack }) {
  const { t } = useTranslation()
  const [state, setState] = useState('initial')

  const handleUpload = () => {
    setState('uploading')
    setTimeout(() => setState('explained'), 1500)
  }

  return (
    <div style={{ padding: 20 }}>
      <button onClick={onBack}>{t('understood')}</button>
      <h2>{t('header_document')}</h2>
      {state === 'initial' && (
        <>
          <FileText size={48} />
          <p>{t('doc_subtitle')}</p>
          <button onClick={handleUpload}>
            <Camera /> {t('doc_button')}
          </button>
        </>
      )}
      {state === 'uploading' && <p>{t('doc_analyzing')}</p>}
      {state === 'explained' && (
        <div>
          <h3>{t('doc_explanation')}</h3>
          <ul>
            <li><strong>{t('doc_contract_type')}</strong> {t('doc_contract_type_value')}</li>
            <li><strong>{t('doc_salary')}</strong> {t('doc_salary_value')}</li>
            <li><strong>{t('doc_hours')}</strong> {t('doc_hours_value')}</li>
            <li><strong>{t('doc_warning')}</strong> {t('doc_warning_value')}</li>
          </ul>
        </div>
      )}
    </div>
  )
}
