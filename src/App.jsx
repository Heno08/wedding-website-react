import React, { useEffect, useState } from 'react';
import styles from './styles/app.module.css'
import Header from './components/header';
import Home from './components/home';
import Rsvp from './components/rsvp';
import OurStory from './components/our-story';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t, i18n } = useTranslation();
  let display;
  const [lang, setLang] = useState('');
  const [page, setPage] = useState('home');

  useEffect(() => {
    i18n.changeLanguage(lang)
  },[lang, i18n])

  if(page === 'home') {
    display = <Home t={t} />
  } else if (page === 'rsvp') {
    display = <Rsvp />
  } else if (page === 'ourstory') {
    display = <OurStory t={t} />
  };

  return (
    <div className={styles.boarder}>
      <Header  setPage={setPage} setLang={setLang} />
        <div className={styles.container}>
          {display}
        </div>
    </div>
  );
}
