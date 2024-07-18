import React from 'react';

const MetodoPago = () => {
  return (
    <div className="p-6 bg-white">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg">

        <h2 className="text-2xl font-bold mb-6 text-center font-lilita mt-24">Cuenta</h2>
        <div className="bg-customDark  text-white p-6 rounded-lg flex items-center">
          <div className="flex-shrink-0">
            <img className="w-24 h-24 rounded-full" src="ruta/a/tu/imagen.jpg" alt="User Avatar" />
          </div>
          <div className="ml-6 flex-grow">
            <div className="grid grid-cols-2 gap-4 font-lilita">
              <div>
                <label className="block text-gray-400"></label>
                <input type="text" className="w-full bg-white text-gray-800 p-2 rounded" placeholder="Nombre" />
              </div>
              <div>
                <label className="block text-gray-400"></label>
                <input type="text" className="w-full bg-white text-gray-800 p-2 rounded" placeholder="Apellido" />
              </div>
              <div>
                <label className="block text-gray-400"></label>
                <input type="number" className="w-full bg-white text-gray-800 p-2 rounded" placeholder="Edad" />
              </div>
              <div>
                <label className="block text-gray-400"></label>
                <input type="password" className="w-full bg-white text-gray-800 p-2 rounded" placeholder="Contraseña" />
              </div>
            </div>
            <div className="mb-4 mt-4 font-lilita">
              <label className="block text-gray-400"></label>
              <input type="text" className="w-full bg-white text-gray-800 p-2 rounded" placeholder="Correo Electrónico" />
            </div>
            <div className="grid grid-cols-2 gap-4 font-lilita">
              <div>
                <label className="block text-gray-400"></label>
                <input type="text" className="w-full bg-white text-gray-800 p-2 rounded" placeholder="País" />
              </div>
              <div>
                <label className="block text-gray-400"></label>
                <input type="number" className="w-full bg-white text-gray-800 p-2 rounded" placeholder="Teléfono" />
              </div>
            </div>
          </div>
          <div className="ml-6 flex flex-col space-y-4">
            <button className="bg-[#f1a512] text-black p-2 rounded font-lily">Editar</button>
            <button className="bg-[#dd4111] text-black p-2 rounded font-lily">Darme de baja</button>
            <button className="bg-[#a1d4b1] text-black p-2 rounded font-lily">Cambiar contraseña</button>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6 text-center font-lilita">Método de pago</h2>
        <div className="bg-customDark text-white p-6 rounded-lg flex items-center">
          <div className="flex-shrink-0">
            <img className="w-32 h-20" src="ruta/a/tu/tarjeta.jpg" alt="Credit Card" />
          </div>
          <div className="ml-6 flex-grow">
            <div className="mb-4 font-lilita">
              <label className="block text-gray-400"></label>
              <input type="text" className="w-full bg-white text-gray-800 p-2 rounded" placeholder="Titular de la tarjeta" />
            </div>
            <div className="font-lilita">
              <label className="block text-gray-400"></label>
              <input type="text" className="w-full bg-white text-gray-800 p-2 rounded" placeholder="Número de la tarjeta" />
            </div>
            <div className="grid grid-cols-2 gap-4 font-lilita">
              <div>
                <label className="block text-gray-400 mt-4"></label>
                <input type="text" className="w-full bg-white text-gray-800 p-2 rounded" placeholder="Fecha de expiración" />
              </div>
              <div>
                <label className="block text-gray-400 mt-4"></label>
                <input type="text" className="w-full bg-white text-gray-800 p-2 rounded" placeholder="CCV" />
              </div>
            </div>
          </div>
          <div className="ml-6 flex flex-col space-y-4">
            <button className="bg-[#f1a512] text-black p-2 rounded font-lily">Editar</button>
            <button className="bg-[#dd4111] text-black p-2 rounded font-lily">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetodoPago;
