import styles from '@/styles/refer_section.module.scss';
import ReferCard from './ReferCard';
import Instructions from './Instructions';

type Props = {};
const ReferSection = (props: Props) => {
	return (
		<main className={styles.base}>
			<ReferCard />
			<Instructions />
		</main>
	);
};
export default ReferSection;
