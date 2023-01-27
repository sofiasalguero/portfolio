import { Routes, Route } from "react-router-dom";
import { Home, Skills } from "../Pages";

const Router = () => {
    return(
        <Routes>
            <Route exact path="/src/Pages/home" element={<Home/>}/>
            <Route exact path="/src/Pages/skills" element={<Skills/>}/>
           
        </Routes>
    )
}

export default Router;