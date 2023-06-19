'use client';
import { useState } from 'react';
import styles from '@/styles/navbar.module.scss';
import Image from 'next/image';

import ratepunkLogo from '@/assets/logo.svg';
import hamburgerBtnIcon from '@/assets/menu.svg';
import closeBtn from '@/assets/close.svg';
import Link from 'next/link';

const MENU_LINKS = [
	{ title: 'Chrome Extension', href: '/' },
	{ title: 'Price Comparison', href: '/' },
	{ title: 'Blog', href: '/' },
];

type Props = {};
function Navbar({}: Props) {
	const [isNavExpanded, setIsNavExpanded] = useState(false);

	const handleHamburgerClick = () => {
		setIsNavExpanded(!isNavExpanded);
	};

	return (
		<div className={styles.container}>
			<nav className={styles.navbar}>
				{/* MobileMenu */}
				{isNavExpanded && (
					<div className={styles.mobile_menu}>
						<div className={styles.mobile_actions}>
							<Link href='/'>
								<Image src={ratepunkLogo} height={32} alt='Brand Logo' />
							</Link>
							<button onClick={handleHamburgerClick}>
								<Image src={closeBtn} alt='close menu button' />
							</button>
						</div>
						<div className={styles.drop_menu_items}>
							<ul>
								{MENU_LINKS.map((link) => (
									<li key={link.title}>
										<Link href={link.href}>{link.title}</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				)}
				{/* /MobileMenu */}

				<Link href='/'>
					<Image src={ratepunkLogo} height={32} alt='Brand Logo' />
				</Link>
				<div className={styles.nav_links}>
					<ul>
						{MENU_LINKS.map((link) => (
							<li key={link.title}>
								<Link href={link.href}>{link.title}</Link>
							</li>
						))}
					</ul>
				</div>
				<button
					onClick={handleHamburgerClick}
					className={styles.hamburger_button}
				>
					<Image src={hamburgerBtnIcon} alt='hamburger menu' />
				</button>
			</nav>
		</div>
	);
}
export default Navbar;
