import React, { useState } from 'react';
import styles from './Formulario.module.css'; 

const Formulario = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    
    <div className="bg-customYellow custom-bg text-white">
     
      <main className="flex items-center justify-center h-screen">
        <div className={styles.wrapper}>
          <div className={styles.cardSwitch}>
            <label className={styles.switch}>
              <input type="checkbox" className={styles.toggle} onChange={handleToggle} />
              <span className={styles.slider}></span>
              <span className={styles.cardSide}></span>
              <div className={styles.flipCardInner}>
                <div className={`${styles.flipCard} ${isSignUp ? styles.isSignUp : ''}`}>
                  <div className={`${styles.title} font-lily`}>{isSignUp ? 'Sign up' : 'Log in'}</div>
                  <form className={styles.flipCardForm} action="">
                     {!isSignUp && (
                      <div className={`${styles.flipCardFront} ${styles.flipCard}`}>
                        <input className={`${styles.flipCardInput} font-lily`} name="email" placeholder="Email" type="email" />
                        <input className={`${styles.flipCardInput} font-lily`} name="password" placeholder="Password" type="password" />
                        <button className={`${styles.flipCardBtn} font-lily`}>Let's go!</button>
                      </div>
                    )}
                    {isSignUp && (
                       <div className={`${styles.flipCardFront} ${styles.flipCard}`}>
                        <input className={`${styles.flipCardInput} font-lily`} placeholder="Name" type="text" />
                        <input className={`${styles.flipCardInput} font-lily`} name="email" placeholder="Email" type="email" />
                        <input className={`${styles.flipCardInput} font-lily`} name="password" placeholder="Password" type="password" />
                        <button className={`${styles.flipCardBtn} font-lily`}>Confirm!</button>
                        </div>
                    )}
                  </form>
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