import { useMemo } from 'react'
import './App.css'

function getNameFromQuery(defaultName: string = 'Friend'): string {
  try {
    const search = new URLSearchParams(window.location.search)
    const value = search.get('name')?.trim()
    if (!value) return defaultName
    return decodeURIComponent(value)
  } catch {
    return defaultName
  }
}

function App() {
  const name = useMemo(() => getNameFromQuery('Friend'), [])
  const firstName = useMemo(() => name.split(' ')[0] || name, [name])

  return (
    <main className="hero">
      <section className="hero-left">
        <h1 className="hero-name">{name}</h1>
        <p className="hero-subtitle">Welcome to your space.</p>
      </section>

      <section className="hero-right">
        <div className="scene" aria-label="Animated boy greeting near a house">
          <div className="house" aria-hidden>
            <div className="roof" />
            <div className="house-body">
              <div className="window window-left" />
              <div className="window window-right" />
              <div className="door" />
            </div>
          </div>

          <div className="boy" aria-hidden>
            <div className="head" />
            <div className="torso" />
            <div className="arm arm-left" />
            <div className="arm arm-right" />
            <div className="leg leg-left" />
            <div className="leg leg-right" />
            <div className="speech">Hi, {firstName}!</div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
