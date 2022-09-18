import axios from 'axios';

const $API = axios.create({
	baseURL: 'http://localhost:5240/api/',
});

export const fetchUsers = async () => await $API.get('users');

export const registration = async (email, password) => {
	try {
		return await $API.post('account/registration', { email, password });
	} catch (e) {
		console.log(e);
	}
};
