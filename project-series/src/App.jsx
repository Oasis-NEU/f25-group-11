import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Profile from "./pages/profile-page.jsx"
import Settings from "./pages/settings.jsx";

function App() {
    return (
    <div>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </BrowserRouter>
    <Profile></Profile>
    </div>
    )
}

export default App