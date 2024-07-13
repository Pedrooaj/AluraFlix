import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieProvider from './Contexts/MovieContext';
import Home from './Pages/Home';
import NovoVideo from './Pages/NovoFilme';
import PaginaPadrao from './Pages/PaginaPadrao';

const AppRoutes = () => {
    return (
        <Router>
            <MovieProvider>
                <Routes>
                    <Route path='/' element={<PaginaPadrao />}>
                        <Route index element={<Home />} />
                        <Route path="Novovideo" element={<NovoVideo />} />
                    </Route>
                </Routes>
            </MovieProvider>
        </Router>

    );
}

export default AppRoutes;