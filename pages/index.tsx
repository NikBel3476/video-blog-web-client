import type { NextPage } from 'next';
import { Badge } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import useSWR, { Fetcher } from 'swr';

const fetcher: Fetcher<any, string> = (url) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
	const { data, error, isLoading } = useSWR<{ message: string }, Error>(
		'/api/Account/getData',
		fetcher
	);

	return (
		<main>
			{isLoading && <div>Loading...</div>}
			{error && <div>Error: {error.message}</div>}
			{data && <div>{data.message}</div>}
			<Badge bg="secondary">Badge</Badge>
			<nav className="flex justify-start">
				<ul className="rounded-lg border border-gray-200 w-96 text-gray-900">
					<li className="px-6 py-2 border-b border-gray-200 w-full cursor-pointer hover:bg-gray-100 transition duration-500 rounded-t-lg">
						<Link href="/account/registration">Registration page</Link>
					</li>
					<li className="px-6 py-2 border-b border-gray-200 w-full cursor-pointer hover:bg-gray-100 transition duration-500">
						<Link href="/users">Users page</Link>
					</li>
					<li className="px-6 py-2 w-full cursor-pointer hover:bg-gray-100 transition duration-500 rounded-b-lg">
						<Link href="/users/all">Users page(old)</Link>
					</li>
				</ul>
			</nav>
		</main>
	);
};

export default Home;
