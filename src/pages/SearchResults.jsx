import React, {useState, useEffect} from "react";
import Sidebar from '../components/SidebarMenu.jsx';
import Chatbot from '../components/chatbot.jsx';
import { useParams } from "react-router-dom";
import { getAccessToken } from "../lib/SpotifyMethods.js";
import { SearchForm } from "../components/SearchForm.jsx";
import axios from "axios";
import { ArticleAlbum } from "../components/ArticleAlbum.jsx";

export function SearchResults (){
    
    const [search, setSearch] = useState('')
    const [response, setResponse] = useState()
    let {type, q} = useParams();


    useEffect(()=>{
       const fectData = async () => {
            let token = await getAccessToken()
            
            await axios.get(
                `https://api.spotify.com/v1/search?q=${q}&type=${type}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            ).then(res=> {
                console.log(res)
                setResponse(res)
            }).catch((error) => {
                console.error(error);
              }) 
       }
       setSearch(q)
       fectData()
    }, [q])


    const [user, setUser] = useState({
        name: 'Usuario Ejemplo',
        email: 'usuario@example.com',
        avatar: 'https://via.placeholder.com/150',
    });

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLogout = () => {
        setUser(null);
        setIsSidebarOpen(false);
      };
    
      const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
    
    

    return(
        <>  
            <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
                ☰
            </button>
            {user && <Sidebar user={user} isOpen={isSidebarOpen} onClose={toggleSidebar} />}
            <section className=" flex flex-col justify-center items-center gap-4">
            <SearchForm />
                {search && <p className="font-lilita text-3xl text-center mt-[6.5rem] mb-5">Mostrando Resultados para: <span className="font-bold uppercase">{search}</span></p>}
                {response && <>
                    <section key={Math.random()} className="grid grid-cols-3 gap-4 my-6">
                    {response.data.albums.items.map(item => {
                            return (
                                <ArticleAlbum album={item}/>
                            )
                        })}
                    </section>
                </>}
            </section>
            <Chatbot /> 
        </>
    )
} 