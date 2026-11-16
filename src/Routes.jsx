import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavigationBar from "./Components/Navbar";
import { UserList } from "./pages/User"

export default function Router() {
    return (
        <BrowserRouter>
            <NavigationBar />

            <Routes>
                <Route path="/" element={<h1>Dashboard</h1>} />

                <Route path="/users" element={<UserList />} />

                <Route path="/about" element={<h1>About Page</h1>} />

                <Route path="/contact" element={<h1>Contact Page</h1>} />

                <Route path="*" element={<h1>404 Page Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}