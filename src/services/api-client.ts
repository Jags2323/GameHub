import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '5d0518d020fe4e19bfa17c428d152f8a'
    }
})

