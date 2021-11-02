import React from 'react'
import Image from 'next/image'

function singlebook({book}) {
   console.log(book)
    return (
        <main>
            <section className="singlebook">
                <div className="comporter">
                    <hr />
                    <div className="row">
                         <div className="col-lg-6">
                         <Image src="/images/book1.jpg" width="500" height="600" alt="single_book"/>
                         </div>
                         <div className="col-lg-6">
                            <h4>Sasha peyton smith</h4>
                            <h1>The witch haven</h1>
                            <p>We work with our partners to streamline project plans that don’t 
                            just deliver on product perfection, but also delivers on time – crucial
                            to success in a highly competitive market where every day counts.
                            We work with our partners to streamline project plans that don’t just deliver on product
                            perfection, but also delivers on time.</p>
                            <h5>Downloads : <span className="dl-count">23434</span></h5>
                            <h5>Review : <span className="rev-star">*****</span></h5>
                            <div className="btn-group">
                                <a href={`${book.url}`} className="download-btn">Free Download</a>
                                <a href="#" className="read-btn">Read Online</a>
                            </div>
                         </div>
                    </div>
                </div>
            </section>

            <section id="latest">
            <div className="comporter">
               <h4>The latest books</h4>
               <hr />
               <div className="owl-carousel owl-theme">
                  <div className="item py-2">
                     <div className="latest-book">
                        <a href="#"><img src="/images/book9.jpg" alt="book" className="img-fluid" /></a>
                        <div className="text-center pt-2">
                           <h6>Daniel Trejo</h6>
                           <h5>History of Europe</h5>
                        </div>
                     </div>
                  </div>
                  <div className="item py-2">
                     <div className="latest-book">
                        <a href="#"><img src="/images/book10.jpg" alt="book" className="img-fluid" /></a>
                        <div className="text-center pt-2">
                           <h6>Daniel Trejo</h6>
                           <h5>History of Europe</h5>
                        </div>
                     </div>
                  </div>
                  <div className="item py-2">
                     <div className="latest-book">
                        <a href="#"><img src="/images/book11.jpg" alt="book" className="img-fluid" /></a>
                        <div className="text-center pt-2">
                           <h6>Daniel Trejo</h6>
                           <h5>History of Europe</h5>
                        </div>
                     </div>
                  </div>
                  <div className="item py-2">
                     <div className="latest-book">
                        <a href="#"><img src="/images/book12.jpg" alt="book" className="img-fluid" /></a>
                        <div className="text-center pt-2">
                           <h6>Daniel Trejo</h6>
                           <h5>History of Europe</h5>
                        </div>
                     </div>
                  </div>
                  <div className="item py-2">
                     <div className="latest-book">
                        <a href="#"><img src="/images/book13.jpg" alt="book" className="img-fluid" /></a>
                        <div className="text-center pt-2">
                           <h6>Daniel Trejo</h6>
                           <h5>History of Europe</h5>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
        </main>
    )
}

export default singlebook;

export const getServerSideProps = async (context)=>{
   const {params} = context;
   const response = await fetch(`https://freebooks-api.herokuapp.com/books/${params.bookId}`);

   const book = await response.json();

   return {
      props: {book}
   }

}