import { Routes, Route, Navigate} from 'react-router-dom';
import { Home, CarRegistration } from '../pages/';
import { Button } from '@mui/material';
import { useAppThemeContext } from '../shared/contexts';

export const AppRoutes = () => {

    const { toggleTheme } = useAppThemeContext();

    return(
        <Routes>
            <Route path='/home' element={<Home />}/>
            <Route path='/car-form' element={<CarRegistration />}/>

            <Route path='*' element={<Navigate to="/home" />}/>
        </Routes>
    );
}