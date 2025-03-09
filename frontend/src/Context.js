import { createContext, useState } from 'react';

export const Context = createContext();

export const Provider = ({ children }) => {
	const [profile, setProfile] = useState();

	return (
		<Context.Provider value={
			{ profile, setProfile }
		}>
			{children}
		</Context.Provider>
	);
};