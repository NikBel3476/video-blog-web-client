import { fetchUsers } from '../../lib/http';
import { Card } from 'react-bootstrap';

export default function UsersList({ users, error }) {
	if (error) {
		return (
			<div>
				<p>{error}</p>
			</div>
		);
	}

	return users.map((user) => (
		<Card>
			<Card.Body>
				<Card.Title>{user.name}</Card.Title>
				<Card.Subtitle>{user.login}</Card.Subtitle>
			</Card.Body>
		</Card>
	));
}

export async function getServerSideProps() {
	try {
		const allUsersRequest = await fetchUsers();
		return {
			props: {
				users: allUsersRequest.data,
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
