const PrivateLayout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div>
			<h2>Dashboard</h2>
			<main>{children}</main>
		</div>
	);
};

export default PrivateLayout;
