// src/index.js o src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importa tus estilos de Tailwind CSS aquí
import App from './App';
import 'tailwindcss/tailwind.css'; // Asegúrate de que la ruta sea correcta según tu configuración de proyecto


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
