import React, { useState } from 'react';
import styles from './styles/app.module.css'
import Header from './components/header';
import Home from './components/home';
import Rsvp from './components/rsvp';

export default function App() {
  let display
  const [page, setPage] = useState('home');

  if(page === 'home') {
    display = <Home />
  } else if (page === 'rsvp'){
    display = <Rsvp />
  };

  return (
    <div className={styles.boarder}>
      <Header  setPage={setPage}/>
        <div className={styles.container}>
          {display}
        </div>
    </div>
  );
}
