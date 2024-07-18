import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles['home-container']}>
      <main className="flex flex-row items-center justify-between px-8 mt-[7rem]">
        <div className="flex flex-col gap-3 justify-center items-center">
          <h1 className={`${styles.title} font-leckerli`}>
            Groovy
          </h1>
          <p className={`${styles.description} font-lilita`}>
            La nostalgia nunca sonó tan bien: descubre la magia de los vinilos.
            Experimenta la autenticidad del sonido vintage con nuestros vinilos clásicos.
            Revive los mejores momentos de la música con nuestros vinilos retro.
          </p>
          <button className={`${styles.button} font-leckerli`}>
            Descubrir
          </button>
        </div>

        <div className="mt-10">
          <img src="https://icons.veryicon.com/png/Media/Vinyl%20Record%20Icons/Vinyl%20Red%20512.png" alt="Vinilo" className={styles['vinyl-image']} />
        </div>
      </main>
    </div>
  );
};

export default Home;
