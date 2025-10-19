import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
//import Profile from "./pages/profile-page.jsx"
import Settings from "./pages/settings.jsx";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                {/*<Route path="/profile-page" element={<Profile />} />*/}
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App