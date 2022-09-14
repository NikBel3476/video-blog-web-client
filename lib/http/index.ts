import axios from 'axios';

const $API = axios.create({
	baseURL: 'http://localhost:5240/api/',
});

export const fetchUsers = async () => await $API.get('users');
