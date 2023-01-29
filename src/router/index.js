import { Routes, Route } from "react-router-dom";
import { Home, Skills } from "../Pages";

const Router = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/skills" element={<Skills/>}/>
           
        </Routes>
    )
}

export default Router;