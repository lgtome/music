import axios from 'axios'


export default async function music(req, res) {
    const data = await axios.get('https://api.deezer.com/album/302127')
    res.setHeader('Content-Type', 'application/json')
    res.json(data)
}