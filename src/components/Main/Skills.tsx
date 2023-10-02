import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Styles from './MainStyle.module.css';

const PROJECTS = [
	{ link: 'project', name: 'Single Column Layout' },
	{ link: 'project-2', name: 'Full Screen Layout' },
	{ link: 'project-3', name: 'E-Commerce Layout' },
	{ link: 'project-4', name: 'Project 4' },
	{ link: 'project-5', name: 'Project 5' },
	{ link: 'project-6', name: 'Project 6' },
	{ link: 'project-7', name: 'Project 7' },
	{ link: 'project-8', name: 'Project 8' },
];

export const Skills = () => {
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
		<div className={Styles.wrapper}>
			<>
				<div className={Styles.cardContainer}>
					<div className={Styles.card}>
						<p className={Styles.text}>
							<b>Frontend</b>
						</p>
						<p>Javascript Typescript React Redux HTML5 CSS3 MUI</p>
					</div>
					<div className={Styles.card}>
						<p className={Styles.text}>
							<b>Backend</b>
						</p>
						<p>Node.js REST API</p>
					</div>
					<div className={Styles.card}>
						<p className={Styles.text}>
							<b>Others</b>
						</p>
						<p>Figma Github Gitlab Torello</p>
					</div>
				</div>
				<p className={`${Styles.description} ${Styles.fontStyle}`}>
					"I'm a web developer in frontend. My aim is to build applications that
					carry DRY code, good usability, modern design and meaningful for
					users."
				</p>
			</>
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
		</div>
	);
};
