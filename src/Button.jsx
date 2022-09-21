import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faPlay, faForward } from '@fortawesome/free-solid-svg-icons'
import './Button.css'

export default function Button() {
    const [change, setChange] = useState([])

    fetch('http://assets.breatheco.de/apis/sound/fx').then((res) => {
      return res.json()
    }).then((data) => {
      setChange(data.map((s, key) => <div className='song' key={key}>{s.url}</div>))
    })
  
    return (
        <div className='button text-center fixed-bottom'>
            <button><FontAwesomeIcon icon={faBackward} change={change} /></button>
            <button><FontAwesomeIcon icon={faPlay}  change={change}/></button>
            <button><FontAwesomeIcon icon={faForward}  change={change}/></button>
        </div>
    )
}
