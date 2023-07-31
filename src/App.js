import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import MainPage from "./components/main/MainPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
