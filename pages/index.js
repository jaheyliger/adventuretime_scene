import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to my <a href='https://spline.design'>Spline</a> 3D Renders
				</h1>

				<div className={styles.grid} style={{marginTop: 20}}>
					<Link href='/phone' className={styles.card}>
						<h2>iPhone &rarr;</h2>
						<p>View my iPhone home screen</p>
					</Link>

					<Link href='/finn' className={styles.card}>
						<h2>Finn & Jake &rarr;</h2>
						<p>Its Adventure Time with Finn and Jake</p>
					</Link>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
}
