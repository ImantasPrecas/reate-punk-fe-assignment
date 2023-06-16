import styles from '@/styles/navbar.module.scss';
import Image from 'next/image';

import ratepunkLogo from '@/assets/logo.svg';
import hamburgerBtnIcon from '@/assets/menu.svg';
import closeBtn from '@/assets/close.svg';
import Link from 'next/link';

type Props = {};
function Navbar({}: Props) {
	return (
		<nav className={styles.navbar}>
			{/* MobileMenu */}
			<div className={styles.mobile_menu}>
				<div className={styles.mobile_actions}>
					<Link href='/'>
						<Image src={ratepunkLogo} height={32} alt='Brand Logo' />
					</Link>
					<button>
						<Image src={closeBtn} alt='close menu button' />
					</button>
				</div>
				<div className={styles.menu_items}>
					<ul>
						<li>
							<Link href='/'>Chrome Extension</Link>
						</li>
						<li>
							<Link href='/'>Price Comparison</Link>
						</li>
						<li>
							<Link href='/'>Blog</Link>
						</li>
					</ul>
				</div>
			</div>
			{/* /MobileMenu */}

			<div>
				<Image src={ratepunkLogo} height={32} alt='Brand Logo' />
			</div>
			<button className={styles.hamburger_button}>
				<Image src={hamburgerBtnIcon} alt='hamburger menu' />
			</button>
		</nav>
	);
}
export default Navbar;
