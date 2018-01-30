import axios from 'axios';

export default class ApiClient {
    constructor() {
        console.log(process.env);
        this.instance = axios.create({
            baseURL: process.env.API_BASE_URL,
            timeout: 1000,
        });
    }

    async getBoard(rows, cols, mines) {
        const path = `http://localhost:5005/api/v1/board/${rows}/${cols}/${mines}`
        return await this.instance.get(path);
    }
}
