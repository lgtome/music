import axios from 'axios'


export default async function handler(req, res) {
    const data = await axios.get(
        `https://cors-anywhere.herokuapp.comhttps://connect.deezer.com/oauth/auth.php?app_id=512002&redirect_uri=http://localhost:3000/&perms=basic_access,email`,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
            },
        })
    res.status(200).json(data)
}