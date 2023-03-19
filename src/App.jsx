import React, { useEffect, useState } from 'react';
import styles from './styles/app.module.css'
import Header from './components/header';
import Home from './components/home';
import Rsvp from './components/rsvp';
import OurStory from './components/our-story';
import { useTranslation } from 'react-i18next';
import Burger from './components/burger';
import { down } from 'styled-breakpoints';
import { useBreakpoint } from "styled-breakpoints/react-styled";
import Itinery from './components/itinery';

export default function App() {
  const isMobile = useBreakpoint(down("md"))
  const { t, i18n } = useTranslation();
  let display;
  const [lang, setLang] = useState('');
  const [page, setPage] = useState('home');

  useEffect(() => {
    i18n.changeLanguage(lang)
  },[lang, i18n]);

  if(page === 'home') {
    display = <Home t={t} />
  } else if (page === 'rsvp') {
    display = <Rsvp />
  } else if (page === 'ourstory') {
    display = <OurStory t={t} />
  } else if (page === 'itinery') {
    display = <Itinery />
  }

  return (
    <div className={styles.boarder}>
      <div className={styles.container}>
        {isMobile ? <Burger setPage={setPage} setLang={setLang} /> : <Header setPage={setPage} setLang={setLang} />}
        {display}
      </div>
    </div>
  );
}
