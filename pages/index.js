export default function Home() {
  return (
      <main id="main-site">
         <section id="banner-area">
            <div className="owl-carousel owl-theme">
               <div className="item">
                  <img src="images/banner1.jpg"/>
               </div>
               <div className="item">
                  <img src="images/banner2.jpg"/>
               </div>
               <div className="item">
                  <img src="images/banner3.jpg"/>
               </div>
            </div>
         </section>
         <section id="next">
            <div className="comporter">
               <h4>Discover Your Next Book</h4>
               <hr />
               <div className="owl-carousel owl-theme">
                  <div className="item py-2">
                     <div className="next-book">
                     <a href="#"><img src="images/book1.jpg" alt="book" className="img-fluid"/></a> 
                     <div className="text-center pt-2">
                        <h6>Daniel Trejo</h6>
                        <h5>History of Europe</h5> 
                     </div>
                     </div>
                  </div>
               </div>
            </div>            
         </section>      
         <section id="genre">
            <div className="comporter">
               <h4>Browse Books by Genre</h4>
               <hr />
               <div className="owl-carousel owl-theme">
                  <div className="item py-3">
                     <div className="genre-card">
                     <a href="#"><img src="images/book1.jpg" alt="book" className="img-fluid"/></a> 
                     <div className="card-footer text-center">
                        <h2>Art</h2> 
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
                     <img src="images/house.jpg" alt="book" className="img-fluid"/> 
                     </div>
                     <div className="col-lg-6 col-12 description">
                        <h3>George Stewart</h3> 
                        <h1>The Man in the<br /> Glass House</h1>
                        <h5>Philip Johnson, Architect of the Modern Century</h5>
                        <p>We work with our partners to streamline project plans that don’t just deliver on product perfection, but also delivers on time – crucial to success in a highly competitive market where every day counts. We work with our partners to streamline project plans that don’t just deliver on product perfection, but also delivers on time.</p>
                        <a href="#">Read Online</a>
                     </div>
                  </div>
               </div>        
         </section>      
      </main>
  )
}
                   
                   
