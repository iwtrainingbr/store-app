import Routes from "./config/Routes";
import {BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

    return (
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    );
}

export default App;
