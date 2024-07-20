import React, {useState, useEffect} from 'react';
import styles from './Home.module.css';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Home = () => {
  const [response,setResponse]=useState()
  useEffect(()=>{
  axios.get('http://localhost:3000/api/globals/landing?locale=undefined&draft=false&depth=1')
          .then(res=>{
            setResponse(res.data)
            console.log(res.data)
          })
  },[])
  return (
    <div className={styles['home-container']}>
      <Navbar/>
      <main id='home' className="flex flex-row items-center justify-between px-8 mt-[7rem]">
        <div className="flex flex-col gap-3 justify-center items-center">
          <h1 className={`${styles.title} font-leckerli`}>
            {response && <span>{response.Interfaz[0].Title}</span>}
          </h1>
          <p className={`${styles.description} font-lilita`}>
           {response && <span>{response.Interfaz[0].Descripcion}</span>}
          </p>
          <button className={`${styles.button} font-leckerli`}>
            Descubrir 
          </button>
        </div>

        <div className="mt-10">
       {response && <img src={response.Interfaz[0].Imagen.url} alt={response.Interfaz[0].Imagen.filename} className={styles['vinyl-image']}/>}
        </div>
      </main>
    </div>
  );
};

export default Home;
