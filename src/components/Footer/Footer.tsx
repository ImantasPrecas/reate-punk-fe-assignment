import styles from '@/styles/footer.module.scss';
import Image from 'next/image';
import logoSvg from '@/assets/logo.svg';
import Link from 'next/link';

import emailIcon from '@/assets/email-footer.svg';
import instagramIcon from '@/assets/instagram.svg';
import facebookIcon from '@/assets/facebook.svg';
import linkedinIcon from '@/assets/linkedin.svg';
import twitterIcon from '@/assets/twitter.svg';
import tiktokIcon from '@/assets/tiktok.svg';

type Props = {};
const Footer = (props: Props) => {
	return (
		<footer className={styles.footer_base}>
			{/* Description */}
			<section className={styles.footer_description}>
				<div>
					<Image src={logoSvg} alt='Ratepunk logo' />
				</div>
				<div>
					<p>
						Ratepunk compares hotel room prices across the major online travel
						agencies. When you search for a room, Ratepunk extension scans the
						top booking sites and runs a price comparison, so you can be
						confident in knowing you’re getting the best deal!
					</p>
				</div>
			</section>
			{/* Quick links */}
			<section className={styles.links_container}>
				<div>
					<h4 className={styles.links_title}>Quick Links</h4>
					<div className={styles.links}>
						<Link href='/'>Price Comparison</Link>
						<Link href='/'>Chrome Extension</Link>
						<Link href='/'>How It Works</Link>
						<Link href='/'>Ratepunk Blog</Link>
						<Link href='/'>Privacy Policy</Link>
					</div>
				</div>
				{/* Contacts */}
				<div>
					<h4 className={styles.links_title}>Contact</h4>
					<div className={styles.email}>
						<Image src={emailIcon} alt='email icon' />
						<a href='mailto:hi@ratepunk.com'>hi@ratepunk.com</a>
					</div>
				</div>
				{/* Social */}
				<div>
					<h4 className={styles.links_title}>Social</h4>
					<div className={styles.social_links}>
						<Link className={styles.social} href='/'>
							<Image src={instagramIcon} alt='Instagram icon' />
						</Link>
						<Link className={styles.social} href='/'>
							<Image src={facebookIcon} alt='facebook icon' />
						</Link>
						<Link className={styles.social} href='/'>
							<Image src={linkedinIcon} alt='linkedin icon' />
						</Link>
						<Link className={styles.social} href='/'>
							<Image src={twitterIcon} alt='twitter icon' />
						</Link>
						<Link className={styles.social} href='/'>
							<Image src={tiktokIcon} alt='tiktok icon' />
						</Link>
					</div>
				</div>
			</section>
			<section>
				<p className={styles.rights}>© 2021 Ratepunk. All Rights Reserved.</p>
			</section>
		</footer>
	);
};
export default Footer;
