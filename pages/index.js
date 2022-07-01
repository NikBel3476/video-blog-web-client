import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Badge } from 'react-bootstrap';

export default function Home() {
	return (
		<h2>
			Main page
			<Badge bg="secondary">Badge</Badge>
		</h2>
	);
}
