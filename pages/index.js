
function Home({ books }) {

   console.log(books)
   return (
      <main id="main-site">
         <section id="banner-area">
            <div className="banner">
               <h1>Books made the world!</h1>
               <p>Search through hundreds of books <br /> and change your life by reading.</p>
               <div className="search-bar">
                  <input type="text" name="search" className="search" placeholder="search for books.." />
                  <button className="btn-search">Search</button>
               </div>
            </div>
         </section>

         <section id="next">
            <div className="comporter">
               <h4>Discover Your Next Book</h4>
               <hr />
               <div className="owl-carousel owl-theme">
                  {
                     books.map(book => (
                        <div className="item py-2" key={book.id}>
                           <div className="next-book">
                              <a href={`/single_book/${book.id}`}><img src={`https://library.lol${book.cover}`} alt="book" className="img-fluid" /></a>
                              <div className="text-center pt-2">
                                 <h6>{book.author}</h6>
                                 <h5>{book.title}</h5>
                              </div>
                           </div>
                        </div>
                     ))
                  }
               </div>
            </div>
         </section>

         <section id="topics">
            <div className="comporter">
               <h4>Browse Books by Topic</h4>
               <div id="filter" className="button-group text-right">
                  <button className="filter_btn is-cheched" data-filter="*">All Topics</button>
                  <button className="filter_btn" data-filter=".Romance">romance</button>
                  <button className="filter_btn" data-filter=".Action">action</button>
                  <button className="filter_btn" data-filter=".Triller">triller</button>
               </div>
               <hr />
               <div className="grid">
                  <div className="grid-item Romance">
                     <div className="item py-2">
                        <div className="topic_card">
                           <h4><a href="#">Romance</a></h4>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item Action">
                     <div className="item py-2">
                        <div className="topic_card">
                           <h4><a href="#">Action</a></h4>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item Triller">
                     <div className="item py-2">
                        <div className="topic_card">
                           <h4><a href="#">Triller</a></h4>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item Romance">
                     <div className="item py-2">
                        <div className="topic_card">
                           <h4><a href="#">Romance</a></h4>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item Action">
                     <div className="item py-2">
                        <div className="topic_card">
                           <h4><a href="#">Action</a></h4>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item Triller">
                     <div className="item py-2">
                        <div className="topic_card">
                           <h4><a href="#">Triller</a></h4>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item Romance">
                     <div className="item py-2">
                        <div className="topic_card">
                           <h4><a href="#">Romance</a></h4>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item Action">
                     <div className="item py-2">
                        <div className="topic_card">
                           <h4><a href="#">Action</a></h4>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item Triller">
                     <div className="item py-2">
                        <div className="topic_card">
                           <h4><a href="#">Triller</a></h4>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item Romance">
                     <div className="item py-2">
                        <div className="topic_card">
                           <h4><a href="#">Romance</a></h4>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item Action">
                     <div className="item py-2">
                        <div className="topic_card">
                           <h4><a href="#">Action</a></h4>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item Triller">
                     <div className="item py-2">
                        <div className="topic_card">
                           <h4><a href="#">Triller</a></h4>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item Romance">
                     <div className="item py-2">
                        <div className="topic_card">
                           <h4><a href="#">Romance</a></h4>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item Action">
                     <div className="item py-2">
                        <div className="topic_card">
                           <h4><a href="#">Action</a></h4>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item Triller">
                     <div className="item py-2">
                        <div className="topic_card">
                           <h4><a href="#">Triller</a></h4>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item Romance">
                     <div className="item py-2">
                        <div className="topic_card">
                           <h4><a href="#">Romance</a></h4>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item Action">
                     <div className="item py-2">
                        <div className="topic_card">
                           <h4><a href="#">Action</a></h4>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item Triller">
                     <div className="item py-2">
                        <div className="topic_card">
                           <h4><a href="#">Triller</a></h4>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item Romance">
                     <div className="item py-2">
                        <div className="topic_card">
                           <h4><a href="#">Romance</a></h4>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item Action">
                     <div className="item py-2">
                        <div className="topic_card">
                           <h4><a href="#">Action</a></h4>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item Triller">
                     <div className="item py-2">
                        <div className="topic_card">
                           <h4><a href="#">Triller</a></h4>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item Romance">
                     <div className="item py-2">
                        <div className="topic_card">
                           <h4><a href="#">Romance</a></h4>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item Action">
                     <div className="item py-2">
                        <div className="topic_card">
                           <h4><a href="#">Action</a></h4>
                        </div>
                     </div>
                  </div>
                  <div className="grid-item Triller">
                     <div className="item py-2">
                        <div className="topic_card">
                           <h4><a href="#">Triller</a></h4>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="random">
            <div className="comporter">
               <div className="row">
                  <div className="col-lg-6 col-12">
                     <img src="images/house.jpg" alt="book" className="img-fluid" />
                  </div>
                  <div className="col-lg-6 col-12 description">
                     <h3>George Stewart</h3>
                     <h1>The Man in the<br /> Glass House</h1>
                     <h5>Philip Johnson, Architect of the Modern Century</h5>
                     <p>We work with our partners to streamline project plans that don’t just deliver on product perfection, but also delivers on time – crucial to success in a highly competitive market where every day counts. We work with our partners to streamline project plans that don’t just deliver on product perfection, but also delivers on time.</p>
                     <a href="#" className="read-btn">Read Online</a>
                  </div>
               </div>
            </div>
         </section>

         <section id="top">
            <div className="comporter">
               <h4>Top Books</h4>
               <hr />
               <div className="owl-carousel owl-theme">
                  <div className="item py-2">
                     <div className="top-book">
                        <a href="#"><img src="images/book5.jpg" alt="book" className="img-fluid" /></a>
                        <div className="text-center pt-2">
                           <h6>Daniel Trejo</h6>
                           <h5>History of Europe</h5>
                        </div>
                     </div>
                  </div>
                  <div className="item py-2">
                     <div className="top-book">
                        <a href="#"><img src="images/book6.jpg" alt="book" className="img-fluid" /></a>
                        <div className="text-center pt-2">
                           <h6>Daniel Trejo</h6>
                           <h5>History of Europe</h5>
                        </div>
                     </div>
                  </div>
                  <div className="item py-2">
                     <div className="top-book">
                        <a href="#"><img src="images/book7.jpg" alt="book" className="img-fluid" /></a>
                        <div className="text-center pt-2">
                           <h6>Daniel Trejo</h6>
                           <h5>History of Europe</h5>
                        </div>
                     </div>
                  </div>
                  <div className="item py-2">
                     <div className="top-book">
                        <a href="#"><img src="images/book8.jpg" alt="book" className="img-fluid" /></a>
                        <div className="text-center pt-2">
                           <h6>Daniel Trejo</h6>
                           <h5>History of Europe</h5>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section id="most">
            <div className="comporter">
               <h4>Most Downloads</h4>
               <hr />
               <div className="owl-carousel owl-theme">
                  <div className="item py-2">
                     <div className="most-book">
                        <a href="#"><img src="images/book9.jpg" alt="book" className="img-fluid" /></a>
                        <div className="text-center pt-2">
                           <h6>Daniel Trejo</h6>
                           <h5>History of Europe</h5>
                        </div>
                     </div>
                  </div>
                  <div className="item py-2">
                     <div className="most-book">
                        <a href="#"><img src="images/book10.jpg" alt="book" className="img-fluid" /></a>
                        <div className="text-center pt-2">
                           <h6>Daniel Trejo</h6>
                           <h5>History of Europe</h5>
                        </div>
                     </div>
                  </div>
                  <div className="item py-2">
                     <div className="most-book">
                        <a href="#"><img src="images/book11.jpg" alt="book" className="img-fluid" /></a>
                        <div className="text-center pt-2">
                           <h6>Daniel Trejo</h6>
                           <h5>History of Europe</h5>
                        </div>
                     </div>
                  </div>
                  <div className="item py-2">
                     <div className="most-book">
                        <a href="#"><img src="images/book12.jpg" alt="book" className="img-fluid" /></a>
                        <div className="text-center pt-2">
                           <h6>Daniel Trejo</h6>
                           <h5>History of Europe</h5>
                        </div>
                     </div>
                  </div>
                  <div className="item py-2">
                     <div className="most-book">
                        <a href="#"><img src="images/book13.jpg" alt="book" className="img-fluid" /></a>
                        <div className="text-center pt-2">
                           <h6>Daniel Trejo</h6>
                           <h5>History of Europe</h5>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="blogs">
            <div className="comporter">
               <h4>Blogs</h4>
               <hr />
               <div className="row">
                  <div className="col-lg-3">
                     <img src="images/blog1.jpg" alt="blog" className="img-fluid" />
                     <div className="pt-2">
                        <a href="#"><h5>Go somewhere</h5></a>
                     </div>
                  </div>
                  <div className="col-lg-3">
                     <img src="images/blog2.jpg" alt="blog" className="img-fluid" />
                     <div className="pt-2">
                        <a href="#"><h5>Go somewhere</h5></a>
                     </div>
                  </div>
                  <div className="col-lg-3">
                     <img src="images/blog3.jpg" alt="blog" className="img-fluid" />
                     <div className="pt-2">
                        <a href="#"><h5>Go somewhere</h5></a>
                     </div>
                  </div>
                  <div className="col-lg-3">
                     <img src="images/blog4.jpg" alt="blog" className="img-fluid" />
                     <div className="pt-2">
                        <a href="#"><h5>Go somewhere</h5></a>
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </main>
   )
}

export default Home;

export const getStaticProps = async () => {
   const response = await fetch('https://freebooks-api.herokuapp.com/books');
   const books = await response.json();

   return {
      props: { books }
   }
}