import axios from "axios";
import qs from "qs";


export async  function getAccessToken () {
    let access_token;
    const data = qs.stringify({
        'grant_type': 'client_credentials',
        'client_id': `${import.meta.env.VITE_SPOTIFY_CLIENT_ID}`,
        'client_secret': `${import.meta.env.VITE_SPOTIFY_KEY}`
    });
    
    await axios.post('https://accounts.spotify.com/api/token', data, {
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then((response) => {
        access_token = response.data.access_token 
    })
    .catch((error) => {
        console.error(error);
    });

    return access_token
}