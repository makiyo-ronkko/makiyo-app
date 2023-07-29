import { useRouteError } from 'react-router-dom';
import errorStyle from './route.module.css';
import appStyles from '../components/App/App.module.css';

export const ErrorPage = () => {
	const error: any = useRouteError();
	return (
		<div className={`${errorStyle.errorWrapper} ${appStyles.gradient1}`}>
			<h2 className={errorStyle.h2}>This page is under maintenance</h2>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
};
