import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
//import Profile from "./pages/profile.jsx"
import Settings from "./pages/settings.jsx";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                {/*<Route path="/profile" element={<Profile />} />*/}
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App