import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';


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
                    <p>Freebooks team</p>
                </div>
                <nav className="navbar navbar-expand-lg">
                    <a href="#" className="navbar-brand text-info">
                        <Image src="/images/logo.png" width="40" height="40" />
                    </a>
                    <button id="menu_btn"><img src="/images/menu.png" /></button>
                    <div className="collapse navbar-collapse" id="afg">
                        <ul className="navbar-nav m-auto">
                            <li className="navbar-item">
                                <Link href="/"><a className="nav-link active">HOME</a></Link>
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
                        </ul>
                    </div>
                </nav>
            </header>
            <div className="slide_out_menu">
                <nav>
                    <ul>
                        <li>
                            <Link href="/"><a>HOME</a></Link>
                        </li>
                        <li>
                            <a href="#">AUTHORS</a>
                        </li>
                        <li>
                            <a href="#">ABOUT</a>
                        </li>
                        <li>
                            <a href="#">CONTACTS</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Header;
