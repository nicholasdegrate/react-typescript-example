import { Fragment, useState } from 'react';
import { Form } from './Form';

interface ITodo {
	item: string;
	completed: boolean;
}

const App = () => {
	const [ allTodo, setAllTodo ] = useState<ITodo[]>([]);

	const grabTodo = (item: string): void => {
		const newTodo: ITodo[] = [ ...allTodo, { item, completed: false } ];

		setAllTodo(newTodo);
	};

	const handleComplete = (completed: number) => {
		const completedItem: ITodo[] = [ ...allTodo ];

		completedItem[completed].completed = !completedItem[completed].completed;

		setAllTodo(completedItem);
	};

	const handleDeleteItem = (indexTodo: string): void => {
		const updatedTodo = allTodo.filter((todo) => todo.item !== indexTodo);
		setAllTodo(updatedTodo);
	};

	return (
		<div className="App">
			<h1>hello</h1>
			<Form grabTodo={grabTodo} />
			{allTodo.map((item, index: number) => {
				return (
					<Fragment>
						<h1 key={index}>{item.item}</h1>
						<button onClick={() => handleComplete(index)} type="button">
							{item.completed ? 'completed' : 'uncompleted'}
						</button>
						<button onClick={() => handleDeleteItem(item.item)} type="button">
							delete
						</button>
					</Fragment>
				);
			})}
		</div>
	);
};

export default App;
