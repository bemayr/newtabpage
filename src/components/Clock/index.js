import React from 'react'

const getTimeString = () => {
  const formatDigits = number => ('0' + number).slice(-2)
  const now = new Date()
  return `${formatDigits(now.getHours())}:${formatDigits(now.getMinutes())}`
}

const Clock = ({ time }) => (
  <div
    className="clock"
    style={{
      letterSpacing: '-5px',
      fontSize: '1125%',
      fontWeight: '500',
      marginBottom: '-.08em',
    }}
  >
    {getTimeString(time)}
  </div>
)

export default Clock
