import Head from "next/head";
import Image from "next/image"
const Header = () => {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <meta name="description" content="FreeBooks an application to download books for free" />
                <title>FreeBooks</title>
                //bootstrap
                <link rel="stylesheet" href="/css/bootstrap.min.css" />
                //animate css
                <link rel="stylesheet" href="/css/animate.css" />
                //owl carousel
                <link rel="stylesheet" href="/css/owl.carousel.min.css" />
                <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
                // costum css
                <link rel="stylesheet" href="/css/style.css" />
            </Head>
            <header id="header">
                <div className="strip d-flex justify-content-between px-3 py-1 bg-light">
                    <p>M.Edriss Aria Herat city +93783261610</p>
                    <div>
                        <a href="#" className="px-3 border-left text-dark">Login</a>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg">
                    <a href="#" className="navbar-brand text-info">
                        <Image src="/images/logo.png" width="40" height="40" />
                    </a>
                    <div className="collapse navbar-collapse" id="afg">
                        <ul className="navbar-nav m-auto">
                            <li className="navbar-item">
                                <a className="nav-link active" href="#">HOME</a>
                            </li>
                            <li className="navbar-item">
                                <a className="nav-link" href="#">PRODUCTS</a>
                            </li>
                            <li className="navbar-item">
                                <a className="nav-link" href="#">AUTHORS</a>
                            </li>
                            <li className="navbar-item">
                                <a className="nav-link" href="#">ABOUT US</a>
                            </li>
                            <li className="navbar-item">
                                <a className="nav-link" href="#">CONTACTS</a>
                            </li>
                            <li className="navbar-item">
                                <a className="nav-link" href="#">COMMING SOON</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
