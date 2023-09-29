import React, { useRef, useState } from 'react';
import {
	AppBar,
	Box,
	Button,
	Grid,
	IconButton,
	InputBase,
	Paper,
	Toolbar,
} from '@mui/material';
import Styles from './ECLayout.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faGlobe,
	faHeart,
	faSearch,
	faShoppingBag,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faFontAwesomeAlt } from '@fortawesome/free-brands-svg-icons';

const gender = ['WOMEN', 'MEN', 'KIDS', 'HOME', 'ART'];

const categories = ['NEW', 'CLOTHING', 'SHOES', 'BAGS', 'ACCESSORIES', 'SALE'];

export const Header = () => {
	const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleHorizontalScroll = (e: { deltaY: number }) => {
		if (!containerRef.current) return;
		// Get the scroll amount from the mouse wheel
		const scrollAmount = e.deltaY;
		containerRef.current.scrollLeft += scrollAmount;
	};

	const handleSearchClick = () => {
		setIsSearchOpen(!isSearchOpen);
	};

	const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
		e.preventDefault();
	};

	return (
		<header>
			<AppBar position='static' color='transparent'>
				<Toolbar className={Styles.smallHeight}>
					<Grid container gap={1}>
						<Grid>
							<IconButton
								aria-label='change a location'
								size='small'
								color='default'
							>
								<FontAwesomeIcon icon={faGlobe} />
							</IconButton>
						</Grid>
						<Grid>
							<Button
								variant='text'
								size='small'
								aria-label='go to a customer care page'
								sx={{ color: 'var(--color-dark)' }}
							>
								Customer Care
							</Button>
						</Grid>
					</Grid>
					<Paper
						component='form'
						sx={{
							p: '2px 4px',
							display: 'flex',
							alignItems: 'center',
							width: 300,
							justifyContent: 'space-between',
						}}
						elevation={0}
					>
						<InputBase
							sx={{
								ml: 1,
								flex: 1,
								opacity: isSearchOpen ? 1 : 0,
								transition: 'all 0.5s ease-in-out',
							}}
							placeholder='Search...'
							inputProps={{ 'aria-label': 'search products' }}
							onSubmit={handleSubmit}
						/>
						<IconButton
							type='button'
							sx={{ p: '10px', width: '2rem', height: '2rem' }}
							size='small'
							aria-label='search'
							onClick={handleSearchClick}
						>
							<FontAwesomeIcon icon={faSearch} />
						</IconButton>
					</Paper>
				</Toolbar>

				<Box display='flex' gap={2}>
					<Toolbar className={Styles.fullWidth}>
						<Grid container gap={1}>
							<Box
								sx={{
									display: 'flex',
									flexBasis: '20%',
									justifyContent: 'center',
								}}
							>
								<IconButton
									type='button'
									size='small'
									aria-label='main logo'
									disableRipple
								>
									<FontAwesomeIcon icon={faFontAwesomeAlt} size='3x' />
								</IconButton>
							</Box>
							<Box
								sx={{ flexBasis: '40%', display: { xs: 'none', md: 'flex' } }}
							>
								<Paper
									component='div'
									sx={{
										p: '2px 4px',
										display: 'flex',
										alignItems: 'center',
										width: '100%',
									}}
									elevation={0}
								>
									{gender.map((g) => (
										<Button
											variant='text'
											size='small'
											key={g}
											sx={{
												color: 'var(--color-dark)',
												width: 'var(--element-xxxs)',
											}}
										>
											{g}
										</Button>
									))}
								</Paper>
							</Box>

							<Box
								sx={{ flexBasis: '20%', display: { xs: 'flex', md: 'none' } }}
							>
								<IconButton type='button' size='small' aria-label='bar menu'>
									<FontAwesomeIcon icon={faBars} />
								</IconButton>
							</Box>
						</Grid>
						<Box sx={{ display: 'flex', flexBasis: '40%' }}>
							<Paper
								component='div'
								sx={{
									p: '2px 4px',
									display: 'flex',
									alignItems: 'center',
									width: '100%',
									justifyContent: 'flex-end',
									gap: '2rem',
								}}
								elevation={0}
							>
								<Button
									variant='text'
									size='small'
									sx={{
										color: 'var(--color-dark)',
										width: '2rem',
										display: { xs: 'none', md: 'flex' },
									}}
								>
									Acoount
								</Button>
								<IconButton
									aria-label='change a location'
									size='small'
									color='default'
									sx={{ width: '2rem', display: { xs: 'flex', md: 'none' } }}
								>
									<FontAwesomeIcon icon={faUser} />
								</IconButton>
								<IconButton
									aria-label='change a location'
									size='small'
									color='default'
									sx={{ width: '2rem' }}
								>
									<FontAwesomeIcon icon={faHeart} />
								</IconButton>
								<IconButton
									aria-label='change a location'
									size='small'
									color='default'
									sx={{ width: '2rem' }}
								>
									<FontAwesomeIcon icon={faShoppingBag} />
								</IconButton>
							</Paper>
						</Box>
					</Toolbar>
				</Box>

				<nav>
					<Toolbar
						className={`${Styles.smallHeight} ${Styles.nav}`}
						ref={containerRef}
						onWheel={handleHorizontalScroll}
						sx={{ padding: 'var(--padding-sm)', gap: '0.5rem' }}
					>
						{categories.map((category) => (
							<Button
								variant='text'
								size='small'
								key={category}
								sx={{ color: 'var(--color-dark)' }}
							>
								{category}
							</Button>
						))}
					</Toolbar>
				</nav>
			</AppBar>
		</header>
	);
};
