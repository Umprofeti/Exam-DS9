import React from "react";
import { Link } from "react-router-dom";


export const ArticleAlbum = ({album}) => {

    let {id, images, name:title, artists, release_date, total_tracks} = album;
    let {name} = artists
    let {url} = images[0]
    return(
        <div key={id} className="bg-white rounded-lg shadow-lg overflow-hidden relative max-w-[350px]">
        <img
          src={url}
          alt={`Cover of ${title}`}
          className="w-full h-64 object-cover relative z-1"
        />
        <div className="p-4 text-center">
          <Link  to={`/user/details/album/${id}`}>
            <h2 className="text-xl font-bold mb-2 font-lily">{title}</h2>
          </Link>
          <p className="text-sm text-gray-600 mb-2 font-lilita flex gap-1 justify-center">
            {artists.map((item, index) => {
                return (
                    <span key={item.id}>{item.name}{index < artists.length - 1 ? ',' : ''}</span>
                )
            })}
          </p>
          <p className="text-sm text-gray-600 mb-2 font-lilita">Fecha de lanzamiento: {release_date}</p>
          <p className="text-sm text-gray-600 mb-2 font-lilita">Total de pistas: {total_tracks}</p>
          <div className="flex flex-row gap-3 justify-center items-center">
            <button className="bg-customYellow text-[#00000] px-4 py-2 rounded-lg font-lily">
                Adquirir
            </button>
            <button className="bg-customDark text-customYellow px-4 py-2 rounded-lg font-lily">
                Personalizar
            </button>
          </div>
        </div>
      </div>
    )
}