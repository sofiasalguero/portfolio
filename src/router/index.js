import { Routes, Route } from "react-router-dom";
import { Home, Skills, Portfolio } from "../Pages";

const Router = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/skills" element={<Skills/>}/>
            <Route exact path="/portfolio" element={<Portfolio/>}/>
        </Routes>
    )
}

export default Router;