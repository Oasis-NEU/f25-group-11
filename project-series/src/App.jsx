import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar.jsx";
import Settings from "./pages/settings.jsx";
import Home from "./pages/home.jsx";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App