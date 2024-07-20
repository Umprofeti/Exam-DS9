import React, {useState, useEffect} from "react";
import Sidebar from '../components/SidebarMenu.jsx';
import Chatbot from '../components/chatbot.jsx';
import { SearchForm } from "../components/SearchForm.jsx";
import { useParams } from "react-router-dom";
import { getAccessToken } from "../lib/SpotifyMethods.js";
import axios from "axios";
import { AlbumDetails } from "../components/AlbumDetails.jsx";
import { MediaPlayer } from "../components/MediaPlayer.jsx";
import { TrackPreviousIcon, TrackNextIcon } from "@radix-ui/react-icons";

export default function InspectAlbum (){
    const [user, setUser] = useState({
        name: 'Usuario Ejemplo',
        email: 'usuario@example.com',
        avatar: 'https://via.placeholder.com/150',
    });
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [tokenPlayer, setTokenPlayer] = useState();
    const [response, setResponse] = useState();
    const [incrementer, setIncrementer] = useState(0);

    let {id} = useParams()

    const handleLogout = () => {
        setUser(null);
        setIsSidebarOpen(false);
    };
    
    const handleIncrementer = () => {
        if(incrementer > response.data.tracks.items.length ){
            setIncrementer(0)
        }else{
            setIncrementer(incrementer + 1)
            setResetPlayerState(true)
        }
    }

    const handleDecrementer = () => {
        if(incrementer <= 0){
            setIncrementer(0)
        }else{

            setIncrementer(incrementer - 1)
        }
    }

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    
      useEffect(()=>{
        const fectData = async () => {
             let token = await getAccessToken()
                setTokenPlayer(token);

             await axios.get(
                 `https://api.spotify.com/v1/albums/${id}`,
                 {
                     headers: {
                         'Authorization': `Bearer ${token}`
                     }
                 }
             ).then(res=> {
                 setResponse(res)
             }).catch((error) => {
                 console.error(error);
            }) 
        }
        fectData()
     }, [])
    return(
        <>
            <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
                ☰
            </button>
            {user && <Sidebar user={user} isOpen={isSidebarOpen} onClose={toggleSidebar} />}
            <section className="flex flex-col justify-center items-center h-full gap-6">
                <SearchForm className="flex flex-col justify-center items-center"/>
                <div className="flex justify-center items-center h-full w-full mt-[7rem]">
                    {response && <AlbumDetails album={response.data} currentTrack={incrementer}/>}
                </div>
                <div className="flex flex-col gap-10 w-[90%] my-4 justify-center items-center">
                    <h3 className="font-lilita text-3xl text-left text-customDark w-full">Aquí te dejamos una muestra de este album</h3>
                    {response &&
                        <div className="flex flex-row w-full items-center justify-center gap-3">
                            <TrackPreviousIcon className="hover:scale-110 transition-all" onClick={handleDecrementer}/>
                                <MediaPlayer previewURL={response.data.tracks.items[incrementer].preview_url}/>
                            <TrackNextIcon className="hover:scale-110 transition-all" onClick={handleIncrementer}/>
                        </div>
                    }
                </div>
            </section>
            {response && <Chatbot albumName={response.data.name} author={response.data.artists[0].name} realeseDate={response.data.release_date} /> }
        </>
    )
}