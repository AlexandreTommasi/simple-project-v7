import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [apiStatus, setApiStatus] = useState<string>('Checking...')
  const [dbStatus, setDbStatus] = useState<string>('Checking...')

  useEffect(() => {
    // Check API health
    axios.get('/api/info')
      .then(res => setApiStatus('API Online ✅'))
      .catch(() => setApiStatus('API Offline ❌'))

    // Check database
    axios.get('/api/test-db')
      .then(res => setDbStatus(res.data.status))
      .catch(() => setDbStatus('Database Error ❌'))
  }, [])

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      padding: '40px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1>🚀 Simple Project - Deploy Test</h1>
      
      <div style={{ 
        background: '#f0f0f0', 
        padding: '20px', 
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h2>Status do Sistema</h2>
        <p><strong>Frontend:</strong> React + Vite ✅</p>
        <p><strong>Backend:</strong> {apiStatus}</p>
        <p><strong>Database:</strong> {dbStatus}</p>
      </div>

      <div style={{ 
        background: '#e8f4f8', 
        padding: '20px', 
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h2>Informações</h2>
        <p>Este é um projeto simplificado para testar o deploy completo:</p>
        <ul>
          <li>Frontend: React com TypeScript e Vite</li>
          <li>Backend: Express com TypeScript</li>
          <li>Database: SQL Server no Azure</li>
        </ul>
      </div>

      <div style={{ 
        textAlign: 'center',
        marginTop: '40px',
        color: '#666'
      }}>
        <p>Deploy realizado com sucesso! 🎉</p>
      </div>
    </div>
  )
}

export default App