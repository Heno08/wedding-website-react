import styles from"../styles/rsvp.module.css";
import React, { useState } from 'react';
import { send } from 'emailjs-com';

export default function Rsvp() {
  const [rsvp,  setRsvp] = useState({
    email: '',
    name: '',
    guest_name: 'No',
    dietry_requirments: 'None',
    train_ride: ''
  });

  const handleChange = (e) => {
    setRsvp({ ...rsvp, [e.target.name]: e.target.value})
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_703r399',
      'template_hq3e513',
      rsvp,
      'h8oK2XY2XyBeeghVb'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  return (
  <>
    <div className={styles.form}>
      <div className={styles.info}>
        <h1>RSVP</h1>
        <h2>for the wedding of</h2>
        <h1>Henry & Sebastien</h1>
          <p className= "line">________________________________________</p>
          <p><u>Friday July 28 2023</u></p>
          <p>Ceremony - 2:30pm</p>
          <p>Train Ride - 4:30pm</p>
          <p>Reception - 5:00pm</p>
          <p className= "line">________________________________________</p>
          <input type="email" name="email" className={styles.input} placeholder="Contact Email" onChange={handleChange}></input>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} className={styles.input}></input>
          <label className={styles.input} htmlFor="guest_name">Will you be bringing a guest? </label>
          <input type="text" name="guest_name" placeholder="Guest Name" onChange={handleChange} className={styles.input}></input>
          <label className={styles.input} htmlFor="dietry_requirments">Please state any dietry requirments </label>
          <input type="text" name="dietry_requirments" placeholder="None" onChange={handleChange} className={styles.input}></input>
          <label>Will you be joining us on the train? </label>
          <br />
          <label htmlFor="train_ride">Yes</label>
          <input type="checkbox" name="train_ride" value="yes" onChange={handleChange} ></input>
          <br />
          <label>No - I will make my own way to the reception</label>
          <input type="checkbox" name="train_ride" value="no" onChange={handleChange} ></input>
          <button className ={styles.rsvpbutton} type="submit" onClick={onSubmit}>Accept</button>
      </div>
    </div>
  </>
  )
};
