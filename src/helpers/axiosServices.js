import axios from 'axios'


// const AUTH_URL = 'https://connect.deezer.com/oauth/auth.php?app_id=YOUR_APP_ID&redirect_uri=YOUR_REDIRECT_URI&perms=basic_access,email'

export const axiosInstance = axios.create({
    baseURL: 'https://api.deezer.com/',
    timeout: 1000
})

export async function authDeezer() {
    return await axios.get(
        `https://cors-anywhere.herokuapp.com/https://connect.deezer.com/oauth/auth.php?app_id=${process.env.API_KEY || '512002'}&redirect_uri=${process.env.REDIRECT_URL || 'http://localhost:3000/'}&perms=basic_access,email`,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
            },
        })
}
