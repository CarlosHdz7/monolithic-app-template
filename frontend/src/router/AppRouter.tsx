import { ROUTES } from '@constants/routes';
import NotFound from '@pages/NotFound';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthRoutes from './AuthRouter';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRouter: React.FC = () => {
	return (
		<Router>
			<Routes>
				{/* Rutas de autenticación */}
				<Route path='/auth/*' element={<AuthRoutes />} />

				{/* Rutas públicas */}
				<Route path='/*' element={<PublicRoutes />} />

				{/* Rutas privadas */}
				<Route path='/dashboard/*' element={<PrivateRoutes />} />

				{/* Página no encontrada */}
				<Route path={ROUTES.notFound} element={<NotFound />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;
