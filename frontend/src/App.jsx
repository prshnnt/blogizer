import { Outlet } from 'react-router-dom';
import {useAuth} from './hooks/useAuth';
import { useEffect } from 'react';
import { fetchProfile } from "./api/UserManager";

function App() {
  const {profile,setProfile } = useAuth();
  
  useEffect(async ()=>{
    const profile_response = await fetchProfile();
    		if(profile_response.STATUS==="FAILED"){
    			throw new Error('Profile fetch Error');
    		}
			setProfile(profile_response.DATA);
    },
  []);

  if(!profile){
    return (
      <>
        <Outlet/>
      </>);
  }
  else{
    return (
        <div>
          <Outlet/>
        </div>
      );
    }
  }

export default App;