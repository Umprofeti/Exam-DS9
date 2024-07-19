import React, {useState} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const SearchForm = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [type, setType] = useState('');
    const navigate = useNavigate();
    const handleSearch = (event) => {
        const { value } = event.target;
        setSearchQuery(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/user/search/album/${searchQuery}`)
    }


    return (
        <div className="w-2/3 md:w-1/2 lg:w-1/3 mb-8 fixed px-3 top-6 z-20 bg-white rounded-lg border-2 border-[#F1A512] focus:outline-none focus:border-[#F1A512]">
            <form className="flex flex-row gap-2 items-center" onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Artista, Album, Canción..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full p-3 text-black "
                />
            </form>
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#F1A512]"
              onClick={() => navigate('/cart')}
            />
        </div>
    )
}