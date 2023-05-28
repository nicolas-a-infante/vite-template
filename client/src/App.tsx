
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

function App() {

    return (
        <Routes>
            <Route path="/" element={<NavBar />}>
                <Route index element={<Home />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
        </Routes>
    )
}

export default App
