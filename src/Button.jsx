import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faPlay, faForward } from '@fortawesome/free-solid-svg-icons'
import './Button.css'

export default function Button() {
    return (
        <div className='text-center'>
            <button><FontAwesomeIcon icon={faBackward} /></button>
            <button><FontAwesomeIcon icon={faPlay} /></button>
            <button><FontAwesomeIcon icon={faForward} /></button>
        </div>
    )
}
