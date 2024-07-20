import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'


export const AlbumDetails = ({album, currentTrack}) => {
    const navigate = useNavigate();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    console.log(album)

    let {id, images, name:title, artists, release_date, total_tracks, tracks} = album;
    let {name} = artists
    let {url} = images[0]


    const handleAddToCart = (album) => {
        addToCart(album);
        setShowConfirmation(true);
        setTimeout(() => {
          setShowConfirmation(false);
        }, 2000);
    };

    const handleCloseDetail = () => {
        navigate(-1)
    };
    return (
        <div key={id} className="w-full px-4 flex justify-center">
            {showConfirmation && (
                <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg">
                ¡Álbum añadido al carrito!
                </div>
            )}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4 flex items-center relative w-3/4">
            <div className="relative flex-1">
              <div className="vinyl-container-custom">
                <div className={`vinyl-record-custom`}></div>
              </div>
              <img
                src={url}
                alt={`Cover of ${title}`}
                className="w-64 h-64 object-cover relative z-1"
              />
            </div>
            
            <div className="flex-1 ml-4">
              <h2 className="text-2xl font-bold mb-2 font-lily text-center">{title}</h2>
              <p className="text-sm text-gray-600 mb-2 font-lilita">{name}</p>
              <p className="text-sm text-gray-600 mb-2 font-lilita">Total de pistas: {total_tracks}</p>
              <ul className="list-disc list-inside text-sm text-gray-600 font-lilita mt-2">
                { tracks.items.map((item, index) => {
                    return (
                        <>
                          {index === currentTrack ?
                            <li key={index}>{item.name} | <span className="font-bold">Reproduciendo...</span></li>
                          : <li key={index}>{item.name}</li>
                          }
                        </>
                    )
                })}
              </ul>
              <div className="flex justify-end mt-4">
                <button className="bg-[#000000] text-[#F1A512] px-4 py-2 rounded-lg font-lily" onClick={handleCloseDetail}>
                  Atrás
                </button>
                <button
                  className="bg-[#000000] text-[#F1A512] px-4 py-2 rounded-lg ml-2 font-lily"
                  onClick={() => handleAddToCart(selectedAlbum)}
                >
                  Añadir al Carrito
                </button>
                <button className="bg-[#000000] text-[#F1A512] px-4 py-2 rounded-lg ml-2 font-lily">Personalizar</button>
              </div>
            </div>
          </div>
        </div>
    )
}