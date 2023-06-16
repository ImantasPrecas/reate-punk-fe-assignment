import styles from '@/styles/navbar.module.scss';
import Image from 'next/image';

import ratepunkLogo from '@/assets/logo.svg';
import hamburgerBtnIcon from '@/assets/menu.svg';

type Props = {};
function Navbar({}: Props) {
	return (
		<nav className={styles.navbar}>
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
