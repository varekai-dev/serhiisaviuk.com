import React, { useState } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';

function ShowMore({ children }) {
	const router = useRouter();
	const [isOpen, setOpen] = useState(false);
	return (
		<div className="show-more">
			<div className={clsx('extra-content', isOpen && 'visible')}>{children}</div>
			<button onClick={() => setOpen(!isOpen)}>{router.route === '/ua' ? `Показати ${isOpen ? 'менше' : 'більше'}` : `	Show ${isOpen ? 'less' : 'more'}`}</button>
		</div>
	);
}

export default ShowMore;
