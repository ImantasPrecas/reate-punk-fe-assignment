'use client';
import { useState } from 'react';

import styles from '@/styles/refer_card.module.scss';

import FormInput from './FormInput';
import ErrorMessage from './ErrorMessage';
import ReferalLink from './ReferalLink';

const URI = 'https://api.jsonbin.io/v3/b';
const BIN_ID = '64915aca9d312622a37284f3';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

type Props = {};
const ReferCard = ({}: Props) => {
	const [emailConfirmed, setEmailConfirmed] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [referralLink, setReferralLink] = useState('');
	const [fetchError, setFetchError] = useState<null | string>(null);

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

	const formSubmitHandler = (enteredEmail: string) => {
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

	return (
		<div className={styles.card}>
			<div>
				<h1>REFER FRIENDS AND GET REWARDS</h1>
				<p className={styles.description}>
					Refer your friends to us and earn hotel booking vouchers. We`ll give
					you 1 coin for each friend that installs our extension. Minimum
					cash-out at 20 coins.
				</p>

				{fetchError && <ErrorMessage message={fetchError} />}

				{emailConfirmed && <ReferalLink referralLink={referralLink} />}
				{!emailConfirmed && (
					<FormInput
						onFormSubmit={formSubmitHandler}
						emailConfirmed={emailConfirmed}
						isLoading={isLoading}
					/>
				)}
			</div>

			<p className={styles.bottom_text}>Limits on max rewards apply.</p>
		</div>
	);
};
export default ReferCard;
