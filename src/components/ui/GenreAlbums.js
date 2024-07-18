import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './MusicGenres.css';
import './VinylStyles.css';

const GenreAlbums = ({ addToCart }) => {
  const { genre } = useParams();
  const navigate = useNavigate();

  const [albums, setAlbums] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const duration = 30;

  useEffect(() => {
    const fetchedAlbums = [
      {
        id: 1,
        title: 'Album 1',
        artist: 'Artist 1',
        releaseDate: '2024-07-18',
        tracks: ['Track 1', 'Track 2', 'Track 3'],
        cover: 'https://via.placeholder.com/150',
      },
      {
        id: 2,
        title: 'Album 2',
        artist: 'Artist 2',
        releaseDate: '2024-07-19',
        tracks: ['Track 1', 'Track 2', 'Track 3'],
        cover: 'https://via.placeholder.com/150',
      },
    ];

    setAlbums(fetchedAlbums);
    setFilteredAlbums(fetchedAlbums);
  }, [genre]);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    const filtered = albums.filter((album) =>
      album.title.toLowerCase().includes(value.toLowerCase()) ||
      album.artist.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredAlbums(filtered);
  };

  const handleAcquire = (album) => {
    setSelectedAlbum(album);
    setIsPlaying(true);
    setCurrentTime(0);

    const timer = setInterval(() => {
      setCurrentTime((prevTime) => {
        if (prevTime < duration) {
          return prevTime + 1;
        } else {
          clearInterval(timer);
          setIsPlaying(false);
          return prevTime;
        }
      });
    }, 1000);
  };

  const handleCloseDetail = () => {
    setSelectedAlbum(null);
    setIsPlaying(false);
  };

  const handleAddToCart = (album) => {
    addToCart(album);
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 2000);
  };

  const formattedTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] flex flex-col items-center relative mt-24">
      <h1 className="text-4xl text-[#F1A512] mb-8 mt-4 font-lily" style={{ textShadow: '2px 2px 0 #8c0027' }}>
      Álbum de {genre}
      </h1>
      {showConfirmation && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg">
          ¡Álbum añadido al carrito!
        </div>
      )}
      {selectedAlbum ? (
        <div className="w-full px-4 flex justify-center">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4 flex items-center relative w-3/4">
            <div className="relative flex-1">
              <div className="vinyl-container-custom">
                <div className="vinyl-record-custom"></div>
              </div>
              <img
                src={selectedAlbum.cover}
                alt={`Cover of ${selectedAlbum.title}`}
                className="w-64 h-64 object-cover relative z-1"
              />
            </div>
            <div className="flex-1 ml-4">
              <h2 className="text-2xl font-bold mb-2 font-lily">{selectedAlbum.title}</h2>
              <p className="text-sm text-gray-600 mb-2 font-lilita">{selectedAlbum.artist}</p>
              <div className="relative w-full h-2 bg-gray-300 mt-4 rounded-lg">
                <div
                  className="absolute top-0 left-0 bg-[#F1A512] rounded-lg"
                  style={{ width: `${(currentTime / duration) * 100}%`, height: '100%' }}
                ></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  {formattedTime(currentTime)} / {formattedTime(duration)}
                </div>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-600 font-lilita mt-2">
                {selectedAlbum.tracks.map((track, index) => (
                  <li key={index}>{track}</li>
                ))}
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
      ) : (
        <>
          <div className="w-2/3 md:w-1/2 lg:w-1/3 mb-8 relative">
            <input
              type="text"
              placeholder="Artista, Album, Canción..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full p-3 text-black rounded-lg border-2 border-[#F1A512] focus:outline-none focus:border-[#F1A512]"
            />
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#F1A512]"
              onClick={() => navigate('/cart')}
            />
          </div>

          <div className="w-full px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredAlbums.map((album) => (
              <div key={album.id} className="bg-white rounded-lg shadow-lg overflow-hidden relative">
                <img
                  src={album.cover}
                  alt={`Cover of ${album.title}`}
                  className="w-full h-64 object-cover relative z-1"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2 font-lily">{album.title}</h2>
                  <p className="text-sm text-gray-600 mb-2 font-lilita">{album.artist}</p>
                  <p className="text-sm text-gray-600 mb-2 font-lilita">{album.releaseDate}</p>
                  <button className="bg-[#F1A512] text-[#00000] px-4 py-2 rounded-lg font-lily" onClick={() => handleAcquire(album)}>
                    Adquirir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GenreAlbums;
