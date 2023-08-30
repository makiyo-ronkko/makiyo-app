import React, { useState } from 'react';
import AppStyles from './App.module.css';
import { MainStyle } from '../Main/index.tsx';
import { SwitchButton } from '../SwitchButton/SwitchButton.tsx';
import { Design } from '../Version2/index.tsx';

export const App = () => {
	const [active, setActive] = useState<boolean>(false);
	const handleClick = () => {
		setActive(!active);
	};
	return (
		<div className={AppStyles.mainWrapper}>
			{active ? <Design /> : <MainStyle />}
			<SwitchButton handleClick={handleClick} active={active} />
		</div>
	);
};
