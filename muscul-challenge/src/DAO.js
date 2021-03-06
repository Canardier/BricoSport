import axios from 'axios'

export default class DAO {
    constructor() {
        this.axios = axios.create({
            baseURL: 'localhost:3000',
            timeout: 10000,
        })
    }

    async getUser() {
        let rep = {};
        await this.axios.get('user/',{})
            .then((response) =>  {
                rep = response.data;
            });
        return rep;
    }
}