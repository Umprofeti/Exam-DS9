import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import Formulario from './pages/Formulario';
import Navbar from './components/Navbar';
import MusicGenres from './components/MusicGenres';
import GenreAlbums from './components/GenreAlbums';
import Sidebar from './components/SidebarMenu';
import Cart from './components/Cart';
import MetodoPago from './components/MetodoPago';
import Orders from './components/Orders';
import Chatbot from './components/chatbot'; // Asegúrate de tener la ruta correcta

const App = () => {
  const [user, setUser] = useState({
    name: 'Usuario Ejemplo',
    email: 'usuario@example.com',
    avatar: 'https://via.placeholder.com/150',
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [recommendedAlbums] = useState([
    {
      id: 3,
      title: 'Album 3',
      artist: 'Artist 3',
      releaseDate: '2024-07-20',
      tracks: ['Track 1', 'Track 2', 'Track 3'],
      cover: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'Album 4',
      artist: 'Artist 4',
      releaseDate: '2024-07-21',
      tracks: ['Track 1', 'Track 2', 'Track 3'],
      cover: 'https://via.placeholder.com/150',
    },
  ]);

  const handleLogout = () => {
    setUser(null);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const addToCart = (album) => {
    setCart([...cart, album]);
  };

  const removeFromCart = (album) => {
    const updatedCart = cart.filter((item) => item.id !== album.id);
    setCart(updatedCart);
  };

  return (
    <Router>
      <Navbar />
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      {user && <Sidebar user={user} isOpen={isSidebarOpen} onClose={toggleSidebar} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/formulario" element={<Formulario />} />
        <Route path="/components/MusicGenres" element={<MusicGenres />} />
        <Route path="/genre/:genre" element={<GenreAlbums addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} recommendedAlbums={recommendedAlbums} />} />
        <Route path="/orders" element={<Orders orders={orders} />} />
        <Route path="/metodo-pago" element={<MetodoPago />} />
      </Routes>
      <Chatbot /> {/* Coloca el componente Chatbot fuera de <Routes> */}
    </Router>
  );
};

export default App;
