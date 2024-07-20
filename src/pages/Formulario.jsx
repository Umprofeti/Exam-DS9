import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './Formulario.module.css';
import Navbar from '../components/Navbar';

const Formulario = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
    setMessage('');
  };

  const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users-app/login', { email, password }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setCookie('jwtToken', response.data.token, 7);
      setMessage('Login exitoso');
      navigate('/dashboard');  // Redirige a otra página después del login
    } catch (error) {
      console.error('Error en el login', error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users-app', { UserName: `${name}`, email, password },{
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setCookie('jwtToken', response.data.token, 7);
      setMessage('Registro exitoso');
      setName('');
      setEmail('');
      setPassword('');
      setIsSignUp(false);  // Cambia a la vista de login después del registro
    } catch (error) {
      console.error('Error en el registro', error);
    }
  };


  return (

    <div className="bg-customYellow custom-bg text-white">
      <main id='home' className="flex items-center justify-center h-screen">
      <Navbar/>
        <div className={styles.wrapper}>
          <div className={styles.cardSwitch}>
            <label className={styles.switch}>
              <input type="checkbox" className={styles.toggle} onChange={handleToggle} />
              <span className={styles.slider}></span>
              <span className={styles.cardSide}></span>
              <div className={styles.flipCardInner}>
                <div className={`${styles.flipCard} ${isSignUp ? styles.isSignUp : ''}`}>
                  <div className={`${styles.title} font-lily`}>{isSignUp ? 'Sign up' : 'Log in'}</div>
                  <div className={styles.flipCardForm} action="">
                    {!isSignUp && (
                      <form className={`${styles.flipCardFront} ${styles.flipCard}`} method='post' onSubmit={handleLogin}>
                        <input className={`${styles.flipCardInput} font-lily`} name="email" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input className={`${styles.flipCardInput} font-lily`} name="password" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <button className={`${styles.flipCardBtn} font-lily`}>Let's go!</button>
                      </form>
                    )}
                    {isSignUp && (
                      <form className={`${styles.flipCardFront}`} method='post' onSubmit={handleRegister}>
                        <input name='Name'  className={`${styles.flipCardInput} font-lily`} placeholder="UserName" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        <input className={`${styles.flipCardInput} font-lily`} name="email" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input className={`${styles.flipCardInput} font-lily`} name="password" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <button className={`${styles.flipCardBtn} font-lily`}>Confirm!</button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className={styles.backgroundImage}></div>
      </main>
    </div>
  );
};

export default Formulario;