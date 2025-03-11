import { Card,CardHeader, CardContent, Avatar , List , ListItem , IconButton , ListItemText , ListItemAvatar , useMediaQuery } from '@mui/material';
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkIcon from "@mui/icons-material/Link";

import {useAuth} from "../../hooks/useAuth";
import { PrivateRoute } from '../wrapper';

export default function ProfilePage(){
	const { profile } = useAuth();
	return (
		<PrivateRoute>
			{/* card */}
			<Card sx={{m:"10%",boxShadow:"0px 0px 50px lightgrey"}} >

				{/* card header */}

				<CardHeader
					title={
						<>
							<p style={{marginLeft:"1vw",fontWeight:"800",fontSize:"2.4ch"}} >{"@"+profile.username}</p>
						</>
					}
					avatar={<Avatar alt={profile.name} src={profile.profile_image}
					sx={{ width: 100, height: 100 ,m:"1vh 2vw"}} />}
					/>

				{/* card content */}
				<CardContent sx={{display:"flex",alignItems: "center",flexDirection: "row",justifyContent: "space-between"}} >
					<List sx={{ml:3,width:'100%' , maxWidth:300 , bgcolor:'background.paper'}} >
						<ListItem>
							<ListItemAvatar>
									<PersonIcon/>
							</ListItemAvatar>
							<ListItemText primary="Name" secondary={profile.name }/>
						</ListItem>
						<ListItem>
							<ListItemAvatar>
									<EmailIcon/>
							</ListItemAvatar>
							<ListItemText primary="Email" secondary={profile.email}/>
						</ListItem>
						<ListItem>
							<ListItemText primary="Bio" secondary={profile.bio}/>
						</ListItem>
					</List>
					<List sx={{borderLeft:"1px solid gray"}} >

						<ListItem>
							<IconButton color="secondary">
								<InstagramIcon/>
							</IconButton>
						</ListItem>

						<ListItem>
							<IconButton sx={{color:"#000"}} >
								<XIcon/>
							</IconButton>
						</ListItem>

						<ListItem>
							<IconButton color="info">
								<LinkIcon/>
							</IconButton>
						</ListItem>

					</List>
				</CardContent>
			</Card>
		</PrivateRoute>);
}