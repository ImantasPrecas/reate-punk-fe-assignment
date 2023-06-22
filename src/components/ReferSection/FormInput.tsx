import styles from '@/styles/refer_card.module.scss';
import emailIcon from '@/assets/email.svg';
import confirmIcon from '@/assets/success.svg';

import Image from 'next/image';
import useInput from '@/hooks/useInput';
import { FormEvent } from 'react';
import ErrorMessage from './ErrorMessage';

type Props = {
	onFormSubmit: (enteredEmail: string) => void;
	emailConfirmed: boolean;
	isLoading: boolean;
};

const placeholderText = 'Please enter your email';

function FormInput({ onFormSubmit, emailConfirmed, isLoading }: Props) {
	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		errorMessage: emailErrorMessage,
		valueChangeHandler: handleEmailChange,
		inputBlurHandler: emailBlurHandler,
	} = useInput('email');

	const formSubmitHandler = (e: FormEvent) => {
		e.preventDefault();
		onFormSubmit(enteredEmail);
	};
	return (
		<>
			{/* Confirm message */}
			{emailConfirmed && (
				<div className={styles.successMsg}>
					<Image src={confirmIcon} width={24} alt='confirm icon' />
					<p>Your email is confirmed!</p>
				</div>
			)}
			{/* /Confirm message */}

			{emailInputHasError && <ErrorMessage message={emailErrorMessage} />}

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
		</>
	);
}
export default FormInput;
