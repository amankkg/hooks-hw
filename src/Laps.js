import React from 'react'

import {formatTime} from './formatTime'

function Laps({laps, onErase}) {
  // TODO: memoize this callback
  const onClick = (id) => () => onErase(id)

  return (
    <ul>
      {laps.map(([id, value]) => (
        <li key={id} tabIndex={id} onClick={onClick(id)}>
          {formatTime(value)}
        </li>
      ))}
    </ul>
  )
}

export {Laps}
