import axios from "axios";

export default {
    async getProducts(){
        return axios.get('http://127.0.0.1:8000/api/products')
            .then(resp => {
                return resp.data;
            })
            .catch(err => {
                console.log(err);
            })

    },

    async getBrands(){
        return axios.get('http://127.0.0.1:8000/api/brands/')
            .then(resp => {
                return resp.data;
            })
            .catch(err => {
                console.log(err);
            })

    }

}