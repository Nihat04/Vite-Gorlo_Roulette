import { Routes, Route } from 'react-router-dom';
import AuthorizationPage from './pages/AuthorizationPage/AuthorizationPage';
import CinemasPage from './pages/CinemasPage/CinemasPage';
import CinemaPage from './pages/CinemaPage/CinemaPage';

function App() {
    return (
        <Routes>
            <Route path="/cinema" element={<CinemasPage />} />
            <Route path="/cinema/:id" element={<CinemaPage />} />
            <Route path="/login" element={<AuthorizationPage />} />
        </Routes>
    );
}

export default App;
