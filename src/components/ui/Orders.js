import React from 'react';
import noOrdersImage from '../img/noorders.png'; 

const Orders = ({ orders }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg ">
      <h2 className="text-2xl font-bold mb-6 text-center font-lilita mt-24" >Pedidos</h2>
      {orders.length === 0 ? (
        <div className="text-center">
          <p className="text-lg mb-4 font-lilita" >Vaya, parece ser que no tienes pedidos recientes con nosotros...</p>
          <img src={noOrdersImage} alt="No Orders" className="mx-auto mb-4" style={{ width: '275px', height: 'auto' }} /> {/* Tamaño ajustado */}
          <p className="text-lg font-lilita">¡Realiza una búsqueda de tu artista y comienza a personalizar a tu estilo!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {orders.map((order, index) => (
            <div key={index} className="bg-gray-800 text-white p-6 rounded-lg">
              <h3 className="font-bold mb-2">Pedido #{order.id}</h3>
              <p>Artista: {order.artist}</p>
              <p>Álbum: {order.album}</p>
              <p>Fecha de pedido: {order.date}</p>
              <p>Estado: {order.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
