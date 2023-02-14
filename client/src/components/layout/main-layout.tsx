import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";


export const MainLayout: React.FC = () => {

    return (
        <>
            <Header />
            <main>

                <Outlet />
            </main>
            <Footer/>
        </>

    );
};
