import axios from 'axios';

export default class ApiClient {
    constructor() {
        console.log(process.env);
        this.instance = axios.create({
            timeout: 1000,
        });
    }

    async getBoard(rows, cols, mines) {
        const path = `/api/v1/board/${rows}/${cols}/${mines}`
        return await this.instance.get(this.getUrl(path));
    }

    getUrl(path) {
        return process.env.REACT_APP_API_BASE_URL+path;
    }
}
