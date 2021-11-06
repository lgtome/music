import axios from 'axios'


// const AUTH_URL = 'https://connect.deezer.com/oauth/auth.php?app_id=YOUR_APP_ID&redirect_uri=YOUR_REDIRECT_URI&perms=basic_access,email'

export const axiosInstance = axios.create({
    baseURL: 'https://api.deezer.com/',
    timeout: 1000
})

export async function authDeezer() {
    return await axios.get(
        `https://connect.deezer.com/oauth/auth.php?app_id=${process.env.API_KEY || 512002}redirect_uri=${process.env.REDIRECT_URL || 'https://music-own.vercel.app/'}&perms=basic_access,email`)
}
