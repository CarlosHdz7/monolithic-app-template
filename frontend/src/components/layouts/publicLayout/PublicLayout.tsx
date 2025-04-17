import { Container } from '@components/atoms/grid';
import Navbar from '@components/molecules/navbar';
import type React from 'react';

const PublicLayout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<>
			<Navbar />
			<Container fluid>
				<main>{children}</main>
			</Container>
		</>
	);
};

export default PublicLayout;
