import axios from 'axios';

const $API = axios.create({
	baseURL: 'http://localhost:5240/api/',
});

export const fetchUsers = async () => await $API.get('users');

export const registration = async (formData: {
	userName: string;
	email: string;
	password: string;
	confirmPassword: string;
}) => {
	try {
		const response = await fetch('/api/account/registration', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify(formData),
		});
		if (!response.ok) {
			throw new Error('Something went wrong');
		}

		return response.json();
	} catch (e) {
		console.log(e);
	}
};
