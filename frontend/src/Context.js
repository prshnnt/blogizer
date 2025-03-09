import { createContext, useState } from 'react';

export const Context = createContext();

export const Provider = ({ children }) => {
	const [authToken , setAuthToken] = useState();
	const [profile , setProfile] =useState();
	const authenticate = (token, profile) => {
			setAuthToken(token);
			setProfile(profile);
		};
	
		const de_authenticate = () => {
			setAuthToken(null);
			setProfile(null);
		};
	const [navMain,setNavMain] = useState();

	return (
			<Context.Provider value={
				{ navMain , setNavMain ,
					authToken,setAuthToken ,
					profile , setProfile,
					authenticate,de_authenticate
				}
				}>
					{children}
			</Context.Provider>
	);
};