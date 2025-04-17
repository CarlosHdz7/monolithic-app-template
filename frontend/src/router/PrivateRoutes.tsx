import { ROUTES } from '@constants/routes';
import { Route, Routes } from 'react-router-dom';
import PrivateLayout from '../components/layouts/privateLayout';

import Dashboard from '@pages/private/dashboard';
import ProtectedRoute from './ProtectedRoutes';

const PrivateRoutes: React.FC = () => {
	return (
		<ProtectedRoute>
			<PrivateLayout>
				<Routes>
					<Route path={ROUTES.private.dashboard} element={<Dashboard />} />
				</Routes>
			</PrivateLayout>
		</ProtectedRoute>
	);
};

export default PrivateRoutes;
