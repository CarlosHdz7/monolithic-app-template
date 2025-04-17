import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { expect, test } from 'vitest';
import Home from './Home';

test('renders Home text', () => {
	render(
		<MemoryRouter>
			<Home />
		</MemoryRouter>
	);
	expect(screen.getByText('Welcome to our App')).toBeInTheDocument();
});
