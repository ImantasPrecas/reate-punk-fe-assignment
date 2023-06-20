'use client';
import { FormEvent, useState } from 'react';
import useInput from '@/hooks/useInput';

import styles from '@/styles/refer_card.module.scss';
import Image from 'next/image';

import emailIcon from '@/assets/email.svg';
import confirmIcon from '@/assets/success.svg';

const URI = 'https://api.jsonbin.io/v3/b';
const BIN_ID = '64915aca9d312622a37284f3';
const API_KEY = '$2b$10$kXqx9.5jH7Av.Q/QfvZaCuu5g2mElY95L80kx.EqJMXdgovA5/7AW';

type Props = {};
const ReferCard = (props: Props) => {
	const [isCopied, setIsCopied] = useState(false);
	const [emailConfirmed, setEmailConfirmed] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [referralLink, setReferralLink] = useState('');
	const [fetchError, setFetchError] = useState<null | string>(null);

	const placeholderText = 'Please enter your email';

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		errorMessage: emailErrorMessage,
		valueChangeHandler: handleEmailChange,
		inputBlurHandler: emailBlurHandler,
	} = useInput('email');

	const sendEmail = async (url: string, data: { email: string }) => {
		const response = await fetch(url, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'X-Master-Key': API_KEY,
				'X-Bin-Name': 'RatePunk',
			},
			body: JSON.stringify(data),
		});

		return response;
	};

	const formSubmitHandler = (e: FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		sendEmail(`${URI}/${BIN_ID}`, { email: enteredEmail })
			.then((respData) => {
				if (respData) {
					setIsLoading(false);
				}
				if (respData.status === 401) {
					setFetchError('someting went wrong, please try again later...');
					return;
				}
				if (respData.status === 200) {
					setEmailConfirmed(true);
					const data = respData
						.json()
						.then((data) => {
							setReferralLink(data.metadata.parentId);
						})

						.catch((err) => {
							setFetchError(err);
						});
				}
			})
			.catch((err) => {
				setFetchError(err);
			});
	};

	const handleCopyToClipboard = async () => {
		navigator.clipboard.writeText(referralLink);
		setIsCopied(true);
	};

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
				{emailInputHasError && (
					<p className={styles.form_errorMsg}>{emailErrorMessage}</p>
				)}
				{fetchError && <p className={styles.form_errorMsg}>{fetchError}</p>}
				{/* /Error message */}

				{/* Referral link */}
				{emailConfirmed && (
					<div className={styles.referral_container}>
						<p>{referralLink}</p>
						{/* <input type='text' value={referralLink} readOnly /> */}
						<button onClick={handleCopyToClipboard} disabled={isCopied}>
							{isCopied ? 'Copied!' : 'Copy'}
						</button>
					</div>
				)}
				{/* /Referral link */}

				{/* Email form */}
				{!emailConfirmed && (
					<form onSubmit={formSubmitHandler}>
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
								type='text'
								name='email'
								value={enteredEmail}
								onChange={handleEmailChange}
								onBlur={emailBlurHandler}
								className={styles.input_field}
								placeholder={placeholderText}
							/>
						</div>
						<button
							disabled={!enteredEmailIsValid || isLoading}
							type='submit'
							className={styles.submitBtn}
						>
							{isLoading ? 'Please wait...' : 'Get Referral Link'}
						</button>
					</form>
				)}
				{/* /Email form */}
			</div>

			<p className={styles.bottom_text}>Limits on max rewards apply.</p>
		</div>
	);
};
export default ReferCard;
