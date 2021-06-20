interface Props {
	name: string,
	age: number
};

export function createPersona(name: string, age: number): Props {
	return {
		name: name,
		age: age,
	};
};