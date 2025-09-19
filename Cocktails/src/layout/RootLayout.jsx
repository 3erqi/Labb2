import Header from "../components/Header";
import Footer from "../components/Footer";
import CocktailList from "../components/CocktailList";
import { Outlet } from "react-router";

function RootLayout() {
    return (
        <>
            <Header />

            <Outlet />

            <Footer />
        </>
    );
}

export default RootLayout
