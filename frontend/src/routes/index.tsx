import { Routes, Route, Navigate} from 'react-router-dom';
import { CarsList, CarsDetails } from '../pages/';

export const AppRoutes = () => {

    return(
        <Routes>
            <Route path='/cars' element={<CarsList />}/>
            <Route path='/cars/car/:id?' element={<CarsDetails />}/>

            <Route path='*' element={<Navigate to="/cars" />}/>
        </Routes>
    );
}