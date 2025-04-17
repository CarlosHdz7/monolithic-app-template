export const ROUTES = {
	public: {
		home: '/',
		about: '/about',
	},
	auth: {
		login: '/login',
		signup: '/signup',
		forgotPassword: '/forgot-password',
	},
	private: {
		dashboard: '/dashboard',
		profile: '/dashboard/profile',
		settings: '/dashboard/settings',
	},
	notFound: '*',
};
