import styles from '@/styles/refer_section.module.scss';
import ReferCard from './ReferCard';
import Instructions from './Instructions';

type Props = {};
const ReferSection = (props: Props) => {
	return (
		<main className={styles.container}>
			<div className={styles.base}>
				<ReferCard />
				<Instructions />
			</div>
		</main>
	);
};
export default ReferSection;
