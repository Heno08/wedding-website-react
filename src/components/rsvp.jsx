import styles from"../styles/rsvp.module.css";
import React, { useState, useRef } from 'react';
import { send } from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";

export default function Rsvp({ setPage, t }) {
  const [loading, setLoading] = useState(false)
  const [rsvp,  setRsvp] = useState({
    email: '',
    name: '',
    guest_name: 'No',
    dietry_requirments: 'None',
    train_ride: ''
  });

  const siteKey = process.env.REACT_APP_SITE_KEY

  const recaptchaRef = useRef();

  const handleChange = (e) => {
    setRsvp({ ...rsvp, [e.target.name]: e.target.value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const token = await recaptchaRef.current.executeAsync();
    const params ={
      ...rsvp,
      'g-recaptcha-response' : token
    }
    send(
      'service_703r399',
      'template_hq3e513',
      params,
      'h8oK2XY2XyBeeghVb',
      'g-recaptcha-response'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setLoading(false)
        alert("Sucsess")
        setPage('itinery')
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert("Submission failed, please")
      });
  };

  return (
  <>
    <div className={styles.form}>
      <div className={styles.info}>
        <form method="POST" onSubmit={handleSubmit}>
          <h1>RSVP</h1>
          <h2>{t("for the wedding of")}</h2>
          <h1>Henry & Sebastien</h1>
            <p className={styles.line}>_________________________________</p>
            <p><u>Friday July 28 2023</u></p>
            <p>{t("Ceremony - 2:30pm")}</p>
            <p>{t("Train Ride - 4:30pm")}</p>
            <p>{t("Reception - 5:00pm")}</p>
            <p className={styles.line}>_________________________________</p>
            <input type="email" name="email" className={styles.input} placeholder="Contact Email" onChange={handleChange}></input>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} className={styles.input}></input>
            <label className={styles.input} htmlFor="guest_name">{t("Will you be bringing a guest?")} </label>
            <input type="text" name="guest_name" placeholder="Guest Name" onChange={handleChange} className={styles.input}></input>
            <label className={styles.input} htmlFor="dietry_requirments">{t("Please state any dietry requirments")}</label>
            <input type="text" name="dietry_requirments" placeholder="None" onChange={handleChange} className={styles.input}></input>
            <label>{t("Will you be joining us on the train?")}</label>
            <br />
            <label htmlFor="train_ride">{t("Yes")}</label>
            <input type="checkbox" name="train_ride" value="yes" onChange={handleChange} ></input>
            <br />
            <label>{t("No - I will make my own way to the reception")}</label>
            <input type="checkbox" name="train_ride" value="no" onChange={handleChange} ></input>
            <br></br>
            {loading ? <p>Loading...</p> :
              <button className={styles.rsvpbutton} type="submit" >
                {t("Accept")}
              </button>
            }
            <ReCAPTCHA sitekey={siteKey} size="invisible" ref={recaptchaRef}/>
        </form>
      </div>
    </div>
  </>
  )
};
