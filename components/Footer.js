const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-12">
                            <h4>FreeBooks</h4>
                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla asperiores fugit suscipit neque at et! Magnam quisquam repudiandae necessitatibus dolorem enim nulla, voluptatem ducimus deleniti magni veritatis sunt, perferendis quasi?</p>
                        </div>
                        <div className="col-lg-4 col-12">
                            <h4>Don’t miss news from Grand Central Publishing</h4>
                            <form>
                                <input type="text" className="subscribe" placeholder="Email"/>
                                <button type="submit" class="subscribe-btn">Subscribe</button>
                            </form>
                        </div>
                        <div className="col-lg-2 col-12">
                            <h4>Information</h4>
                            <div className="d-flex flex-column flex-wrap">
                                <a href="#" className="text-white-50 pb-1">About Us</a>
                                <a href="#" className="text-white-50 pb-1">Privacy Policy</a>
                                <a href="#" className="text-white-50 pb-1">Terms & Conditions</a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-12">
                            <h4>Acount</h4>
                            <div className="d-flex flex-column flex-wrap">
                                <a href="#" className="text-white-50 pb-1">My Acount</a>
                                <a href="#" className="text-white-50 pb-1">Order History</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright text-center bg-dark text-light py-2">
                <p className="">&copy;copyrights 2021. Design by <a href="#" class="color-second">M.Edriss Aria</a></p>
            </div>
            <script type="text/javascript" src="/js/jquery.min.js"></script>
            <script type="text/javascript" src="/js/popper.min.js"></script>
            <script type="text/javascript" src="/js/popper.min.js"></script>
            <script src="/js/owl.carousel.min.js"></script>
            <script src="/js/isotope.pkgd.min.js"></script>
            <script src="/js/index.js"></script>
        </>
    );
}

export default Footer;

