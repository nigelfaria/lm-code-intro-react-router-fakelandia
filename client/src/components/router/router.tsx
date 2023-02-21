import { Route, Routes } from "react-router-dom";
import { Home } from "../home/home";
import { Confession } from "../confessions/confession";
import { Misdemeanours } from "../misdemeanour/misdemeanours";
import { MainLayout } from "../layout/main-layout";
import { NotFound } from "../Utility/not-found";

const Router: React.FC = () => {

    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element = {<Home/>}/>
                <Route path="confession" element={<Confession/>}/>
                <Route path="misdemeanour" element={<Misdemeanours/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    );

}

export default Router;