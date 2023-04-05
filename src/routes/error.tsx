import { useRouteError } from 'react-router-dom';
import errorStyle from './route.module.css';

export const ErrorPage = () => {
	const error: any = useRouteError();
	return (
		<div className={`${errorStyle.errorWrapper} ${errorStyle.gradient1}`}>
			<h2>Sorry, an unexpected error has occurred.</h2>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
};
