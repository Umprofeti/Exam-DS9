import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function obtenerCookie(nombre) {
    let todasLasCookies = document.cookie;
    let cookies = todasLasCookies.split('; ');
  
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      let [cookieNombre, cookieValor] = cookie.split('=');
  
      if (cookieNombre === nombre) {
        return cookieValor;
      }
    }
  
    return null;
}



async function estaAutenticado() {
    return obtenerCookie('jwtToken') !== null
}

export function RutaProtegida({ children, ...rest }) {
  let navigate = useNavigate();

  useEffect(()=> {
      if (!estaAutenticado()) {
        navigate('/login');
      }
  }, [])
  

  return children;
}

