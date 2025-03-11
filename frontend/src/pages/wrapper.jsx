import {useLocation , Navigate} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function PrivateRoute({ children }){
    const location = useLocation();
    const {profile} = useAuth();
    if(!profile){
      return (<Navigate
        replace={true}
        to="/signin"
        state={{ from: `${location.pathname}${location.search}` }}
      />);
    }else{
      return (<>{children}</>);
    }
  }