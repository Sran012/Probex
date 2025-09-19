import { Navbar } from "../components/Navbar";
import { Navline } from "../components/Navline";
import { Grid } from "../components/Grid";
import "./App.css";
import {Madeby} from "../components/madeby"


export function App() {
    return (
        <div className="bg-slate-800">
            <Navbar/>
            <Navline/>
            <Grid/>
            <Madeby/>
        </div>
    )
    
}

export default App


