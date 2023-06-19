'use client';
import { useState } from 'react';
import styles from '@/styles/refer_card.module.scss';
import Image from 'next/image';

import emailIcon from '@/assets/email.svg';
import confirmIcon from '@/assets/success.svg';

type Props = {};
const ReferCard = (props: Props) => {
	const [emailConfirmed, setEmailConfirmed] = useState(false);
	const [emailError, setEmailError] = useState(false);

	return (
		<div className={styles.card}>
			<div>
				<h1>REFER FRIENDS AND GET REWARDS</h1>
				<p className={styles.description}>
					Refer your friends to us and earn hotel booking vouchers. We`ll give
					you 1 coin for each friend that installs our extension. Minimum
					cash-out at 20 coins.
				</p>

				{/* Confirm message */}
				{emailConfirmed && (
					<div className={styles.successMsg}>
						<Image src={confirmIcon} width={24} alt='confirm icon' />
						<p>Your email is confirmed!</p>
					</div>
				)}
				{/* /Confirm message */}

				{/* Error message */}
				{emailError && (
					<p className={styles.form_errorMsg}>Please enter valid email</p>
				)}
				{/* /Error message */}

				<form action=''>
					<div className={styles.input_container}>
						<span className={styles.icon}>
							<Image
								priority
								src={emailIcon}
								width={16}
								height={13}
								alt='email icon'
							/>
						</span>
						<input
							type='email'
							className={styles.input_field}
							placeholder='Enter your email address'
						/>
					</div>
					<button className={styles.submitBtn}>Get Referral Link</button>
				</form>
			</div>
			<p className={styles.bottom_text}>Limits on max rewards apply.</p>
		</div>
	);
};
export default ReferCard;
