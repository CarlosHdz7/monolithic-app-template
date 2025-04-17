import AuthLayout from '@components/layouts/authLayout';

import { ROUTES } from '@constants/routes';
import NotFound from '@pages/NotFound';
import ForgotPassword from '@pages/auth/forgotPassword';
import Login from '@pages/auth/login';
import Signup from '@pages/auth/signup';
import { Route, Routes } from 'react-router-dom';

const AuthRoutes: React.FC = () => {
	return (
		<AuthLayout>
			<Routes>
				<Route path={ROUTES.auth.login} element={<Login />} />
				<Route path={ROUTES.auth.signup} element={<Signup />} />
				<Route path={ROUTES.auth.forgotPassword} element={<ForgotPassword />} />

				<Route path={ROUTES.notFound} element={<NotFound />} />
			</Routes>
		</AuthLayout>
	);
};

export default AuthRoutes;
