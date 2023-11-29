import { Routes, Route, Navigate} from 'react-router-dom';
import { DashBoard } from '../pages/dash-board/DashBoard';
import { Button } from '@mui/material';
import { useAppThemeContext } from '../shared/contexts';

export const AppRoutes = () => {

    const { toggleTheme } = useAppThemeContext();

    return(
        <Routes>
            <Route path='/home' element={<DashBoard />}/>

            <Route path='*' element={<Navigate to="/home" />}/>
        </Routes>
    );
}