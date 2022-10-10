import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

export default function App() {
    return (
        <div className="app">
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    );
}