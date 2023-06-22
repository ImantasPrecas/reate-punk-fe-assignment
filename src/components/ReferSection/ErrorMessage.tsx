import styles from '@/styles/refer_card.module.scss';

type Props = { message: string | null | undefined };
function ErrorMessage({ message }: Props) {
	return <p className={styles.form_errorMsg}>{message}</p>;
}
export default ErrorMessage;
