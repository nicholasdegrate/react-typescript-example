import { useState } from 'react';
interface FormProps {
	grabTodo: (string: string) => void;
}

export function Form({ grabTodo }: FormProps) {
	const [ todo, setTodo ] = useState<string | null>('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setTodo(e.target.value);
	};

	const handleSubmit = (e: React.SyntheticEvent): void => {
		e.preventDefault();

		const target = e.target as typeof e.target & {
			todo: { value: string };
		};

		grabTodo(target.todo.value);

		setTodo('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input value={todo} name="todo" onChange={handleChange} type="text" />
			<button type="submit">submit</button>
		</form>
	);
}
