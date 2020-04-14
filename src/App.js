import React, {useState, useEffect} from 'react'

import {Laps} from './Laps'
import {formatTime} from './formatTime'
import logo from './logo.svg'
import './App.css'

function App() {
  const [running, setRunning] = useState(false)
  const [timer, setTimer] = useState(0)
  const [laps, setLaps] = useState([])

  useEffect(() => {
    const timeoutId = setTimeout(alert, 1500, guideMessage)

    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    if (!running) return

    const timerInterval = setInterval(
      () => setTimer((prevTimer) => prevTimer + 100),
      100,
    )

    return () => clearInterval(timerInterval)
  }, [running])

  const onStart = () => {
    setRunning(true)
    setLaps([])
  }

  const onFinish = () => {
    setRunning(false)
    setTimer(0)
    setLaps((prevLaps) => [...prevLaps, [prevLaps.length, timer]])
  }

  const onLap = () => {
    setLaps((prevLaps) => [...prevLaps, [prevLaps.length, timer]])
  }

  const eraseLap = (id) => {
    setLaps((prevLaps) => prevLaps.filter((lap) => lap[0] !== id))
  }

  const logoClass = running ? 'App-logo App-logo--spin' : 'App-logo'

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={logoClass} alt="logo" />
        <h3>{formatTime(timer)}</h3>
        <p>
          <button onClick={onStart} disabled={running}>
            ▶️ start
          </button>
          &nbsp;
          <button onClick={onLap} disabled={!running}>
            🔂 lap
          </button>
          &nbsp;
          <button onClick={onFinish} disabled={!running}>
            ⏹️ finish
          </button>
        </p>
        Laps
        <Laps laps={laps} onErase={eraseLap} />
      </header>
    </div>
  )
}

export default App

const guideMessage = `
Press "▶️ start" button to launch a stopwatch
Press "🔂 lap" button to record elapsed time
Press "⏹️ finish" button to finish recording
`
