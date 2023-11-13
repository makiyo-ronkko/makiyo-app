import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Styles from './CompanyProject.module.css';
import { CircularProgress } from '@mui/material';
import { ScrollToTop } from '../../../helpers/scroll';

export const CompanyProject = () => {
	const [imageLoaded, setImageLoaded] = useState<boolean>(false);

	const handleImageLoad = () => {
		setImageLoaded(true);
	};

	useEffect(() => {
		setImageLoaded(true);

		return () => setImageLoaded(false);
	}, []);

	return (
		<div className={Styles.wrapper}>
			<ScrollToTop />
			<div className={Styles.button}>
				<Link to={'/'} className={Styles.backButton}>
					Back
				</Link>
			</div>
			<p className={Styles.header}>
				<a
					href='https://haltian.com/solutions/empathic-building-for-offices/'
					target='_blank'
					rel='noopener noreferrer'
					className={Styles.aTag}
				>
					Empathic Building for Offices
				</a>
			</p>
			{!imageLoaded ? (
				<CircularProgress sx={{ color: 'var(--color-cloud)' }} />
			) : (
				<a
					href='https://haltian.com/solutions/empathic-building-for-offices/'
					target='_blank'
					rel='noopener noreferrer'
					className={Styles.aTag}
				>
					<img
						src='/assets/screenshots/empathic-building-for-offices.png'
						alt='screenshot'
						className={Styles.screenshot}
						onLoad={handleImageLoad}
					/>
				</a>
			)}
			<div className={Styles.notepadWrapper}>
				<div className={Styles.notepad}>
					<div className={Styles.top} />
					<div className={Styles.paper}>
						<div className={Styles.timeline}>
							<p className={`${Styles.subHeader} ${Styles.letterSpacing}`}>
								<b>Project Kickoff:</b>
							</p>
							<p className={Styles.indentation}>October 2021</p>
							<p className={Styles.subHeader}>
								<b>Development Phases:</b>
							</p>
							<p className={Styles.indentation}>
								Created components in the library
							</p>
							<p className={Styles.indentation}>
								<a
									href='https://design.empathicbuilding.com/'
									target='_blank'
									rel='noopener noreferrer'
									className={Styles.hrefColor}
								>
									design.empathicbuilding.com
								</a>
							</p>
							<p className={Styles.indentation}>
								Integrated customized components into the office application
							</p>
							<p className={Styles.indentation}>
								Developed the complete application
							</p>
							<p className={Styles.subHeader}>
								<b>Launch Date:</b>
							</p>
							<p className={Styles.indentation}>January 2023</p>
							<p className={Styles.indentation}>
								<a
									href=' https://office.empathicbuilding.com/'
									target='_blank'
									rel='noopener noreferrer'
									className={Styles.hrefColor}
								>
									office.empathicbuilding.com
								</a>
							</p>
							<p className={Styles.subHeader}>
								<b>Technologies:</b>
							</p>
							<p className={Styles.indentation}>
								Javascript, Typescript, HTML5, CSS3, React, MUI
							</p>
						</div>
					</div>
				</div>
				<div className={Styles.notepad}>
					<div className={Styles.top} />
					<div className={Styles.paper}>
						<p>
							Responsible for developing Empathic Building for Offices with one
							lead developer, two frontend developers, one UI/UX desginer and
							one graphic designer and collaboration with Dead Set Bit
							developers.
						</p>
						<br />
						<p>
							In a nutshell, the project involved component library creation,
							integration into the office application, and successful
							application development, culminating in a successful launch in
							January 2023.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
