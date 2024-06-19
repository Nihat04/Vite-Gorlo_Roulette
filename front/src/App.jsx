import { Routes, Route, Navigate } from 'react-router-dom';
import AuthorizationPage from './pages/AuthorizationPage/AuthorizationPage';
import CinemasPage from './pages/CinemasPage/CinemasPage';
import CinemaPage from './pages/CinemaPage/CinemaPage';

function App() {
    return (
        <Routes>
            <Route path="/cinema" element={<CinemasPage />} />
            <Route path="/cinema/:id" element={<CinemaPage />} />
            <Route path="/login" element={<AuthorizationPage />} />
            <Route path="*" replace element={<Navigate to="/cinema" />} />
        </Routes>
    );
}

export default App;
