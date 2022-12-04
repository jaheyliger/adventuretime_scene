import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Spline from '@splinetool/react-spline';

export default function Home() {
	return (
		<main style={{height: '100vh'}}>
			<Spline scene='https://prod.spline.design/BBnma8cOa8oDBtYJ/scene.splinecode' />
		</main>
	);
}
