import './globals.css';

export const metadata = {
	title: 'Ratepunk FE assignment',
	description:
		'Imantas Precas solution of Ratepunk assignment for Frontend developer position',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
