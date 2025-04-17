import { ROUTES } from '@constants/routes';
import { Navigate } from 'react-router-dom';

// Simulación de autenticación
const useAuth = () => {
	const user = localStorage.getItem('user'); // Si hay usuario en localStorage, está autenticado
	return !!user;
};

interface ProtectedRoutesProps {
	children: React.ReactNode;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ children }) => {
	const isAuthenticated = useAuth();

	return isAuthenticated ? (
		children
	) : (
		<Navigate to={`/auth${ROUTES.auth.login}`} />
	);
};

export default ProtectedRoutes;
