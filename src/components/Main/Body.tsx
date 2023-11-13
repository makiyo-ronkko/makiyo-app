import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Styles from './MainStyle.module.css';
import { Skills } from './Skills';
import { CompanyProject } from './CompanyProject';

const PROJECTS = [
	{ link: 'project', name: 'Single Column Layout' },
	{ link: 'project-2', name: 'Full Screen Layout' },
	{ link: 'project-3', name: 'E-Commerce Layout' },
	{ link: 'project-4', name: 'Multi-Column Layout' },
	{ link: 'project-5', name: 'Pixel Art' },
	{ link: 'project-6', name: 'TODO App' },
	{ link: 'project-7', name: 'Could be more...' },
];

export const Body = () => {
	const sliderRef = useRef<HTMLDivElement | null>(null);
	const mouseDown = useRef(false);
	const startX = useRef<number | null>(null);
	const scrollLeft = useRef<number | null>(null);

	const startDragging = (e: React.MouseEvent) => {
		mouseDown.current = true;
		if (!sliderRef.current) return;
		startX.current = e.pageX - sliderRef.current.offsetLeft;
		scrollLeft.current = sliderRef.current.scrollLeft;
	};

	const stopDragging = () => {
		mouseDown.current = false;
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		e.preventDefault();
		if (
			!mouseDown.current ||
			sliderRef.current === null ||
			startX.current === null ||
			scrollLeft.current === null
		) {
			return;
		}

		const x = e.pageX - sliderRef.current.offsetLeft;
		const scroll = x - startX.current;
		sliderRef.current.scrollLeft = scrollLeft.current - scroll;
	};

	return (
		<>
			<Skills />
			<CompanyProject />
			<div className={Styles.projectWrapper}>
				<p className={`${Styles.description} ${Styles.subTitle}`}>
					Responsive Web Designs
				</p>
				<div
					className={Styles.projectContainer}
					ref={sliderRef}
					onMouseDown={startDragging}
					onMouseUp={stopDragging}
					onMouseLeave={stopDragging}
					onMouseMove={handleMouseMove}
				>
					{PROJECTS.map((project) => {
						return (
							<Link
								to={project.link}
								className={Styles.link}
								key={project.link}
							>
								<div className={`${Styles.project}`}>
									<button className={Styles.projectButton}>
										<b className={Styles.text}>{project.name}</b>
									</button>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</>
	);
};
