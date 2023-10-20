import Header from "./components/Header.jsx";
import Routing from "./components/Routing.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
    return (
        <>
            {/*TODO: Test this!!*/}
            <div className={"app-container"}>
                <Header/>
                <div className="content-container">
                    <Routing/>
                </div>
                <Footer/>
            </div>
        </>
    )
}