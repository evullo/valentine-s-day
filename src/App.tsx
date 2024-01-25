import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import Header from "./components/visual/Header.tsx";
import ResponseSuccessPage from "./pages/ResponseSuccessPage.tsx";
import ResponseFailPage from "./pages/ResponseFailPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Footer from "./components/visual/Footer.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="success" element={<ResponseSuccessPage />} />
                <Route path="fail" element={<ResponseFailPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
