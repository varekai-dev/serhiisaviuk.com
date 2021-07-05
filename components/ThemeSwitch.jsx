import React, { useContext } from 'react';
import { AppContext } from './context/AppContext';
import { useRouter } from 'next/router';

function ThemeSwitch({ text }) {
	const router = useRouter();
	const { theme, setTheme } = useContext(AppContext);
	const handleClick = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};
	return (
		<a className="theme-switcher" onClick={handleClick}>
			{text}
		</a>
	);
}

export default ThemeSwitch;
