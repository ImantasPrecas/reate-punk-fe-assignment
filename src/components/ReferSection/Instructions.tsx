import Image from 'next/image';
import styles from '@/styles/instructions.module.scss';

import inviteIcon from '@/assets/invite.svg';
import colectIcon from '@/assets/collect-coins.svg';
import voucherIcon from '@/assets/voucher.svg';

type Props = {};
const Instructions = (props: Props) => {
	return (
		<section className={styles.instructions}>
			{/* step1 */}
			<div className={styles.step}>
				<span>
					<Image src={inviteIcon} width={128} alt='invite image' />
				</span>
				<p className={styles.step_number}>step 1</p>
				<h3 className={styles.step_title}>INVITE FRIENDS</h3>
				<p className={styles.step_description}>
					Refer friends with your unique referral link.
				</p>
			</div>
			{/* step2 */}
			<div className={styles.step}>
				<span>
					<Image src={colectIcon} width={128} alt='invite image' />
				</span>
				<p className={styles.step_number}>step 2</p>
				<h3 className={styles.step_title}>COLLECT COINS</h3>
				<p className={styles.step_description}>
					Get 1 coin for each friend that installs our extension using your
					referral link.
				</p>
			</div>
			{/* step3 */}
			<div className={styles.step}>
				<span>
					<Image src={voucherIcon} width={128} alt='invite image' />
				</span>
				<p className={styles.step_number}>step 3</p>
				<h3 className={styles.step_title}>GET VOUCHER</h3>
				<p className={styles.step_description}>
					Redeem for a $20 hotel booking voucher once you collect 20 coins.
				</p>
			</div>
		</section>
	);
};
export default Instructions;
