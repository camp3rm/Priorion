import React, {useState} from 'react'
import './form.scss';
import Delete from '../../../../assets/delete.png';

export const Form = ({ todos, setTodos }) => {
	const [todo, setTodo] = useState({
		text: '',
		description: '',
	});

	const handleTodo = (e) => {
		const { name, value } = e.target;
		setTodo((prevTodo) => ({
			...prevTodo,
			[name]: value,
		}));
	};

	const handleSubmitForm = (e) => {
		e.preventDefault();
		const newTodo = {
			id: new Date().getTime(),
			text: todo.text,
			description: todo.description,
			complete: false,
		};
		setTodos([...todos, newTodo]);
		setTodo({ text: '', description: '' });
	};
	return (
		<div className="to-do_container">
			<form
				className="todos-form"
				action="/"
				onSubmit={handleSubmitForm}>
				<input
					className="todosInput"
					placeholder="Add a task"
					type="text"
					name="text"
					required
					value={todo.text}
					onChange={handleTodo}
				/>
				<input
					className="descriptionInput"
					placeholder="Add a description"
					type="text"
					name="description"
					value={todo.description}
					onChange={handleTodo}
				/>
				<button
					className="todos-button"
					type="submit"></button>
			</form>
				<ul className="todo-list">
					{todos &&
						todos.map((item) => (
							<li
								className="todo-list_item"
								key={item.id}>
								<h4 className="todo-list_item-title">{item.text}</h4>
								<p className="todo-list_item-description">{item.description}</p>
								<span className="todo-list_item-delete">
									<img
										src={Delete}
										alt="Delete"
									/>
								</span>
							</li>
						))}
				</ul>
			</div>
	);
};
