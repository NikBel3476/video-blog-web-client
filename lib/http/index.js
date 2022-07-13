import https from 'https';
import axios from 'axios';

axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false });

const $API = axios.create({
	baseURL: 'https://localhost:7240/api/',
});

export const fetchUsers = async () => await $API.get('users');
