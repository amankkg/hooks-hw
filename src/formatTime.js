const withZero = (value) => (value < 10 ? `0${value}` : value)

const formatTime = (value) => {
  const m = Math.floor(value / 60 / 1000)
  const s = Math.floor((value / 1000) % 60)
  const ms = (value % 1000) / 100

  return `${withZero(m)}:${withZero(s)}:${ms}`
}

export {formatTime}
