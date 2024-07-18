import React from 'react';

const Cart = ({ cartItems, removeFromCart, recommendedAlbums, handleAcquire }) => {
  return (
    <div className="min-h-screen bg-white  flex flex-col items-center relative">
      <h1 className="text-4xl text-[#F1A512] mb-8 mt-24 font-lily" style={{ textShadow: '2px 2px 0 #8c0027' }}>
        Tu Carrito
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-2xl text-black mb-4 font-lilita">Tu carrito está vacío</p>
      ) : (
        <div className="w-full px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cartItems.map((album) => (
            <div key={album.id} className="bg-white rounded-lg shadow-lg overflow-hidden relative z-1">
              <img src={album.cover} alt={`Cover of ${album.title}`} className="w-full h-64 object-cover relative z-1" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 font-lily">{album.title}</h2>
                <p className="text-sm text-gray-600 mb-2 font-lilita">{album.artist}</p>
                <button className="bg-[#DD4111] text-black px-4 py-2 rounded-lg font-lily" onClick={() => removeFromCart(album)}>
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <h2 className="text-3xl text-customYellow mt-8 mb-4 font-lily" style={{ color:'#f1a512' ,textShadow: '2px 2px 0 #8c0027' }}>
      Pensamos que te gustaría...
      </h2>
      <div className="w-full px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recommendedAlbums.map((album) => (
          <div key={album.id} className="bg-white rounded-lg shadow-lg overflow-hidden relative z-10">
            <img src={album.cover} alt={`Cover of ${album.title}`} className="w-full h-64 object-cover relative z-10" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 font-lily">{album.title}</h2>
              <p className="text-sm text-gray-600 mb-2 font-lilita">{album.artist}</p>
              <button className="bg-customYellow px-4 py-2 rounded-lg font-lily" onClick={() => handleAcquire(album)}>
                Adquirir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
