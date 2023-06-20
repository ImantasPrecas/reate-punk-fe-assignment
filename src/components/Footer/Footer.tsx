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

const SOCIALS = [
	{ name: 'instagram', icon: instagramIcon, href: '/' },
	{ name: 'facebook', icon: facebookIcon, href: '/' },
	{ name: 'linkedin', icon: linkedinIcon, href: '/' },
	{ name: 'twitter', icon: twitterIcon, href: '/' },
	{ name: 'tiktok', icon: tiktokIcon, href: '/' },
];

const QUICK_LINKS = [
	{ title: 'Price Comparison', href: '/' },
	{ title: 'Chrome Extension', href: '/' },
	{ title: 'How It Works', href: '/' },
	{ title: 'Ratepunk Blog', href: '/' },
	{ title: 'Privacy Policy', href: '/' },
];

type Props = {};
const Footer = (props: Props) => {
	return (
		<footer className={styles.container}>
			<div className={styles.footer_base}>
				{/* Description */}
				<section className={styles.footer_description}>
					<div>
						<Image src={logoSvg} alt='Ratepunk logo' />
						<p>
							Ratepunk compares hotel room prices across the major online
							travel agencies. When you search for a room, Ratepunk
							extension scans the top booking sites and runs a price
							comparison, so you can be confident in knowing you’re getting
							the best deal!
						</p>
					</div>
					<div>
						<p className={styles.rights_desktop}>
							© 2021 Ratepunk. All Rights Reserved.
						</p>
					</div>
				</section>
				{/* Quick links */}
				<section className={styles.links_container}>
					<div>
						<h4 className={styles.links_title}>Quick Links</h4>
						<div className={styles.links}>
							{QUICK_LINKS.map((link) => (
								<Link key={link.title} href={link.href}>
									{link.title}
								</Link>
							))}
						</div>
					</div>
					{/* Contacts */}
					<div className={styles.contacts}>
						<div>
							<h4 className={styles.links_title}>Contact</h4>
							<div className={styles.email}>
								<Image src={emailIcon} alt='email icon' />
								<a href='mailto:hi@ratepunk.com'>
									<Image src={emailIcon} alt='email icon' />{' '}
									<span>hi@ratepunk.com</span>
								</a>
							</div>
						</div>
						{/* Social */}
						<div>
							<h4 className={styles.links_title}>Social</h4>
							<div className={styles.social_links}>
								{SOCIALS.map((item) => (
									<Link
										key={item.name}
										className={styles.social}
										href={item.href}
									>
										<Image src={item.icon} alt='Instagram icon' />
									</Link>
								))}
							</div>
						</div>
					</div>
				</section>
				<section className={styles.rights_section}>
					<p className={styles.rights}>© 2021 Ratepunk. All Rights Reserved.</p>
				</section>
			</div>
		</footer>
	);
};
export default Footer;
