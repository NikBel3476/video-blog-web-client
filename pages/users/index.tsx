import React from 'react';
import { NextPage } from 'next';
import { API_BASE_URL } from '../../consts/API';

type UsersPageProps = {
	users: any;
	error: any;
};

const UsersPage: NextPage<UsersPageProps> = ({ users, error }) => {
	if (error) {
		return (
			<div>
				<p>{error}</p>
			</div>
		);
	}

	return (
		<main>
			{users.map((user) => (
				<div key={user.id}>
					<h1>{user.name}</h1>
				</div>
			))}
		</main>
	);
};

export async function getServerSideProps() {
	try {
		const usersRequest = await fetch(`${API_BASE_URL}/api/users`);
		if (usersRequest.status !== 200) {
			throw new Error('Failed to fetch users');
		}

		const users = await usersRequest.json();
		return {
			props: {
				users,
				error: null,
			},
		};
	} catch (e) {
		console.error(e);
		return {
			props: {
				users: [],
				error: e.message,
			},
		};
	}
}

export default UsersPage;
