import Header from "../components/Header";
import Footer from "../components/Footer";
import CocktailList from "../components/CocktailList";

function RootLayout() {
    return (
        <>
            <Header />

            <CocktailList />

            <Footer />
        </>
    );
}

export default RootLayout
