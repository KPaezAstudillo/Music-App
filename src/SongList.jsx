import React from 'react'

export default function SongList({song}) {
    return (
        <div>
            {song.map(s => (
            <div key={s}>{s}</div>  
        ))}
        </div>
    )
}
