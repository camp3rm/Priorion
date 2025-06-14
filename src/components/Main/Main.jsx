import React, { useState } from 'react';
import './main.scss';
import { Form } from './components/todo-form/Form';
export const Main = () => {
	const [todos, setTodos] = useState([]);

	return (
		<div className="main">
			<h2 className="app-title">ToDo List</h2>
			<Form todos={todos} setTodos={setTodos} />
			<div className="to-do_container">
				<ul className="todo-list">
					{todos &&
						todos.map((item) => (
							<li className="todo-list_item" key={item.id}>
								<h4 className="todo-list_item-title">{item.text}</h4>
								<p className="todo-list_item-description">{item.description}</p>
								<span></span>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};
