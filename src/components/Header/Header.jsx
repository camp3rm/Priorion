import React from 'react'
import './header.scss'
export const Header = () => {
	const time = new Date().toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
	});
	return (
		<div className="header">
			<span className="local-time">{time}</span>
			<span className="themes"></span>
		</div>
	);
};