import React, { useState } from 'react';
import SongList from './SongList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Button from './Button';

function App() {
  const [song, setSong] = useState([])

  fetch('http://assets.breatheco.de/apis/sound/fx').then((res) => {
    return res.json()
  }).then((data) => {
    setSong(data.map((s, key) => <div className='song' key={key}>{s.id}. {s.name}</div>))
  })

  return (
    <>
      <SongList song={song} />
      <Button />
    </>
  );
}

export default App;
