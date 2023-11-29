import { AppThemeProvider } from './shared/contexts';
import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { SideBar } from './shared/components/';

function App() {
    return (
        <AppThemeProvider>
            <BrowserRouter>
                <SideBar>
                    <AppRoutes />
                </SideBar>
            </BrowserRouter>
        </AppThemeProvider>
    );
}

export default App;
