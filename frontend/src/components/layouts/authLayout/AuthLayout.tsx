import { Container } from '@components/atoms/grid';
import Navbar from '@components/molecules/navbar';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Navbar />
			<Container fluid>
				<main>{children}</main>
			</Container>
		</>
	);
};

export default AuthLayout;
