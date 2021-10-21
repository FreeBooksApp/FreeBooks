import Header from "./header";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <>
            <Header />
                {props.children}
            <Footer />
        </>
    );
}

export default Layout;