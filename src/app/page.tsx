import styles from '@/styles/page.module.scss';
import ReferSection from '@/components/ReferSection/ReferSection';
import WebStore from '@/components/WebStore/WebStore';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

export default function Home() {
	return (
		<>
			<Navbar />
			<main className={styles.main}>
				<ReferSection />
				<WebStore />
				<Footer />
			</main>
		</>
	);
}
