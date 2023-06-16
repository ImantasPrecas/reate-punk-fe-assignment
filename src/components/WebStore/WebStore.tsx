import styles from '@/styles/web_store.module.scss';
import Image from 'next/image';
import chromeStoreIcon from '@/assets/chrome.svg';
import appleStoreIcon from '@/assets/apple.svg';
import starIcon from '@/assets/star.svg';
import Link from 'next/link';

type Props = {};
const WebStore = (props: Props) => {
	return (
		<section className={styles.base}>
			{/* Card 1 */}
			<div>
				<Link
					className={styles.web_card}
					href='https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk'
				>
					<div className={styles.logo}>
						<Image src={chromeStoreIcon} alt='chrome store icon' />
					</div>
					<div className={styles.description}>
						<p>available in the</p>
						<h3>chrome web store</h3>
					</div>
				</Link>
			</div>
			{/* Card 2 */}
			<div>
				<Link
					href='https://apps.apple.com/app/ratepunk/id1607823726'
					className={styles.web_card}
				>
					<div className={styles.logo}>
						<Image src={appleStoreIcon} alt='chrome store icon' />
					</div>
					<div className={styles.description}>
						<p>available in the</p>
						<h3>apple app store</h3>
					</div>
				</Link>
			</div>
			{/* Review */}
			<div className={styles.review}>
				<div className={styles.stars}>
					<Image src={starIcon} alt='star' height={16} />
					<Image src={starIcon} alt='star' height={16} />
					<Image src={starIcon} alt='star' height={16} />
					<Image src={starIcon} alt='star' height={16} />
					<Image src={starIcon} alt='star' height={16} />
				</div>
				<p>Chrome Store reviews</p>
			</div>
		</section>
	);
};
export default WebStore;
