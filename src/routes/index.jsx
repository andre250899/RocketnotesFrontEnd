import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
	return(
		<BrowserRouter>
			<AuthRoutes/>
		</BrowserRouter>
	);
}