import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingBag, faCog, faCreditCard, faSignOutAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate } from 'react-router-dom';
import './SidebarMenu.css'; 

const SidebarMenu = ({ user, isOpen, onClose }) => {
  
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="user-profile">
          <img src={user.avatar} alt="User Avatar" className="avatar" />
          <p className="username">{user.name}</p>
        </div>
       
      </div>
      <ul className="sidebar-menu">
        <li><FontAwesomeIcon icon={faUser} /> Perfil</li>
        <li><Link to="/orders"><FontAwesomeIcon icon={faShoppingBag} /> Pedidos</Link></li> 
        <li><FontAwesomeIcon icon={faCog} /> Personalizar</li>
        <li><FontAwesomeIcon icon={faCreditCard} /> <Link to="/metodo-pago">Métodos de Pago</Link></li>
        <li><FontAwesomeIcon icon={faSignOutAlt}  /> <Link to="/">Cerrar Sesión</Link></li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
