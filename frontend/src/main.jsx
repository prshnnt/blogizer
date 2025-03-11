import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from './Context';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme';

import App from './App';
// Import other pages...
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import ProfilePage from './pages/Profile/ProfilePage';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="signin" element={<SignIn/>}/>
            <Route path="signup" element={<SignUp/>}/>
            <Route path="profile" element={<ProfilePage/>} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </ThemeProvider>
);