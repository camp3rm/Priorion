import React, { useState } from 'react';
import './main.scss';

import { Form } from './components/todo-form/Form';
export const Main = () => {
	const [todos, setTodos] = useState([]);

	return (
		<div className="main">
			<h2 className="app-title">Priorion</h2>
			<Form
				todos={todos}
				setTodos={setTodos}
			/>
		</div>
	);
};
