import { useState } from 'react';

import styles from '@/styles/refer_card.module.scss';

type Props = { referralLink: string };
function ReferalLink({ referralLink }: Props) {
	const [isCopied, setIsCopied] = useState(false);

	const handleCopyToClipboard = async () => {
		navigator.clipboard.writeText(referralLink);
		setIsCopied(true);
	};
	return (
		<div className={styles.referral_container}>
			<p>{referralLink}</p>
			<button onClick={handleCopyToClipboard} disabled={isCopied}>
				{isCopied ? 'Copied!' : 'Copy'}
			</button>
		</div>
	);
}
export default ReferalLink;
