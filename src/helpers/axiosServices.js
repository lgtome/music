import axios from 'axios'
import fetchJsonp from 'fetch-jsonp'


// const AUTH_URL = 'https://connect.deezer.com/oauth/auth.php?app_id=YOUR_APP_ID&redirect_uri=YOUR_REDIRECT_URI&perms=basic_access,email'

export const axiosInstance = axios.create({
    baseURL: 'https://api.deezer.com/',
    timeout: 1000
})

// export async function authDeezer() {
//     return await axios.get(
//         `https://cors-anywhere.herokuapp.com/https://connect.deezer.com/oauth/auth.php?app_id=${process.env.API_KEY || '512002'}&redirect_uri=${process.env.REDIRECT_URL || 'http://localhost:3000/'}&perms=basic_access,email`,
//         {
//             headers: {
//                 'Access-Control-Allow-Origin': '*',
//                 'Content-Type': 'application/json',
//                 // 'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//                 // 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
//             },
//             mode: 'no-cors'
//         })
// }


export async function authDeezer() {
    const testURL = `https://connect.deezer.com/oauth/auth.php?app_id=${process.env.API_KEY || '512002'}&redirect_uri=${process.env.REDIRECT_URL || 'http://localhost:3000/'}&perms=basic_access,email`
    const myInit = {
        mode: 'no-cors',
    }

    const myRequest = new Request(testURL, myInit)

    fetch(myRequest)
        .then(res => res)
        .then(response => response)
        .catch(e => new Error(e.message))
}
