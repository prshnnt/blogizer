import { useState }from 'react';
import { useNavigate } from "react-router-dom";


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { login , fetchProfile } from "../../api/UserManager";
import { useAuth } from "../../hooks/useAuth";

function Copyright(props) {
	return (
	<Typography variant="body2" color="text.secondary" align="center" {...props}>
		{'Copyright © '}
		<Link color="inherit" href="https://mui.com/">
		Test
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
	</Typography>
	);
}

export default function SignIn() {
	const [err,setErr]= useState();
	const [username,setUsername] =  useState();
	const [password,setPassword] =  useState();
	const navigate = useNavigate();
	const { setProfile } = useAuth();

	const handleSubmit = async (event) => {
	event.preventDefault();
	try{
		const login_response = await login({username,password});
		if(login_response.STATUS==="SUCCESS"){
    		const profile_response = await fetchProfile();
    		if(profile_response.STATUS==="FAILED"){
    			throw new Error('Profile fetch Error');
    		}
			setProfile(profile_response.DATA);
    		navigate("/home");
		}
        else{
            throw new Error("Login Failed");
        }
		
	}catch(err){
		setErr(err);
		console.log(err);
	}
	};

	return (
		<Container component="main" maxWidth="xs">
		<CssBaseline />
		<Box
			sx={{
			marginTop: 8,
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			}}
		>
			<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
			<LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
			Sign in
			</Typography>
			<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
			<TextField
				value={username}
				onChange={(e)=>setUsername(e.target.value)}
				margin="normal"
				required
				fullWidth
				id="username"
				label="Username"
				name="username"
				autoComplete="username"
				autoFocus
			/>
			<TextField
				value={password}
				onChange={(e)=>setPassword(e.target.value)}
				margin="normal"
				required
				fullWidth
				id="password"
				label="Password"
				name="password"
				autoComplete="current-password"
				type="password"
			/>
			<FormControlLabel
				control={<Checkbox value="remember" color="primary" />}
				label="Remember me"
			/>
			<Button
				type="submit"
				fullWidth
				variant="contained"
				sx={{ mt: 3, mb: 2 }}
			>
				Sign In
			</Button>
			<Grid container>
				<Grid item xs>
				<Link href="#" variant="body2">
					Forgot password?
				</Link>
				</Grid>
				<Grid item onClick={()=>navigate("/signup")} >
				<Link variant="body2">
					{"Don't have an account? Sign Up"}
				</Link>
				</Grid>
			</Grid>
			</Box>
		</Box>
		<Copyright sx={{ mt: 8, mb: 4 }} />
		</Container>
	);
}