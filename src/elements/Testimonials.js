import { Autoplay, Pagination,Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="wow fadeInUp" >

      {/* <div className='row'> */}
      {/* <div className=' col-3'>
           <p>hello</p>
          </div> */}
      <div className="col-12">
        <div className='flex-container'>

          {/* Swiper Component */}
          <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: '#swiper-prev',
          nextEl: '#swiper-next',
        }}
        slidesPerView={3}
        speed={800}
        style={{ paddingBottom: '40px' }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          20: {
            slidesPerView: 1,
          },
        }}
      >


            {/* First Slide */}
            <SwiperSlide>

              <div className="testimonial-item text-center mb-4" style={{
                borderRadius: "15px",
                padding: "30px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
                height: "450px",

              }}>

                <img
                  src="assets/img/tm1.jpeg"
                  className="testimonial-img rounded-circle mb-3"
                  alt=""
                  style={{ border: "4px solid #fff", boxShadow: "0 4px 10px rgba(0,0,0,0.2)", transition: "transform 0.3s ease" }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: "#333" }}>Aarav</h3>
                {/* <h4 style={{ fontSize: '1.1rem', color: '#777', fontWeight: '500' }}>CEO & Founder</h4> */}

                <div
                  className="scrollable-text-container"
                  style={{
                    maxHeight: "150px",
                    overflow: "auto",
                    scrollbarWidth: "none", // For Firefox
                    msOverflowStyle: "none" // For IE and Edge
                  }}
                >
                  <style>
                    {`
      .scrollable-text-container::-webkit-scrollbar {
        display: none; /* Hides scrollbar for Webkit browsers */
      }
    `}
                  </style>

                  <p style={{
                    fontStyle: "italic",
                    color: "#555",
                    fontSize: "1.1rem",
                    margin: 0 // Remove extra margins for better fit
                  }}>
                    {/* <img src="assets/img/quote-sign-left.png" className="quote-sign-left" alt="" /> */}
                    Aarav, one of our esteemed clients, approached us at Firstminer Tech for app and website development. Our team collaborated closely to understand their unique requirements and deliver a tailored solution that exceeded expectations. Yugal's project showcases our commitment to quality, innovation, and customer satisfaction in every detail."
                    {/* <img src="assets/img/quote-sign-right.png" className="quote-sign-right" alt="" /> */}
                  </p>
                </div>


              </div>
            </SwiperSlide>

            {/* Second Slide */}
            <SwiperSlide>
              <div
                className="testimonial-item text-center mb-4"
                style={{
                  borderRadius: "15px",
                  padding: "30px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  backgroundColor: "#fff",
                  height: "450px",

                }}
              >
                <style>
                  {`
      .testimonial-item::-webkit-scrollbar {
        display: none; /* Hides scrollbar for Webkit browsers */
      }
    `}
                </style>

                <img
                  src="assets/img/tm2.jpeg"
                  className="testimonial-img rounded-circle mb-3"
                  alt=""
                  style={{
                    border: "4px solid #fff",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    transition: "transform 0.3s ease"
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: "#333" }}>Vivaan</h3>
                {/* <h4 style={{ fontSize: '1.1rem', color: '#777', fontWeight: '500' }}>CEO & Founder</h4> */}

                <div
                  className="scrollable-text-container"
                  style={{
                    maxHeight: "150px",
                    overflow: "auto",
                    scrollbarWidth: "none", // For Firefox
                    msOverflowStyle: "none" // For IE and Edge
                  }}
                >
                  <style>
                    {`
      .scrollable-text-container::-webkit-scrollbar {
        display: none; /* Hides scrollbar for Webkit browsers */
      }
    `}
                  </style>

                  <p style={{
                    fontStyle: "italic",
                    color: "#555",
                    fontSize: "1.1rem",
                    margin: 0 // Remove extra margins for better fit
                  }}>
                    Vivaan, a valued client of Firstminer Tech, entrusted us with the development of his app and website. By understanding his vision and incorporating innovative solutions, we delivered a project that reflects both functionality and design excellence. Harish's collaboration highlights our ability to bring ideas to life with precision and dedication."
                  </p>
                </div>

              </div>


            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item text-center mb-4" style={{
                borderRadius: "15px",
                padding: "30px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
                height: "450px",

              }}>

                <img
                  src="assets/img/tm3.jpeg"
                  className="testimonial-img rounded-circle mb-3"
                  alt=""
                  style={{ border: "4px solid #fff", boxShadow: "0 4px 10px rgba(0,0,0,0.2)", transition: "transform 0.3s ease" }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />

                {/* <img src="assets/img/quote-sign-left.png" className="quote-sign-left" alt="" /> */}
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: "#333" }}>Riyaan</h3>
                {/* <img src="assets/img/quote-sign-right.png" className="quote-sign-right" alt="" /> */}
                {/* <h4 style={{ fontSize: '1.1rem', color: '#777', fontWeight: '500' }}>Software Developer</h4> */}

                <div
                  className="scrollable-text-container"
                  style={{
                    maxHeight: "150px",
                    overflow: "auto",
                    scrollbarWidth: "none", // For Firefox
                    msOverflowStyle: "none" // For IE and Edge
                  }}
                >
                  <style>
                    {`
      .scrollable-text-container::-webkit-scrollbar {
        display: none; /* Hides scrollbar for Webkit browsers */
      }
    `}
                  </style>

                  <p style={{
                    fontStyle: "italic",
                    color: "#555",
                    fontSize: "1.1rem",
                    margin: 0 // Remove extra margins for better fit
                  }}>
                    "Riyaan partnered with Firstminer Tech for app and website development to bring his innovative ideas to reality. Through our detailed approach and expert execution, we delivered a solution tailored to his specific needs. Working with Anik was a rewarding experience, showcasing our dedication to quality and client satisfaction."

                  </p>
                </div>



              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div
                className="testimonial-item text-center mb-4"
                style={{
                  borderRadius: "15px",
                  padding: "30px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  backgroundColor: "#fff",
                  height: "450px",

                }}
              >
                <img
                  src="assets/img/tm4.jpeg"
                  className="testimonial-img rounded-circle mb-3"
                  alt=""
                  style={{ border: "4px solid #fff", boxShadow: "0 4px 10px rgba(0,0,0,0.2)", transition: "transform 0.3s ease" }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: "#333" }}>Kavya</h3>
                {/* <h4 style={{ fontSize: '1.1rem', color: '#777', fontWeight: '500' }}>Software Developer</h4> */}

                <div
                  className="scrollable-text-container"
                  style={{
                    maxHeight: "150px",
                    overflow: "auto",
                    scrollbarWidth: "none", // For Firefox
                    msOverflowStyle: "none" // For IE and Edge
                  }}
                >
                  <style>
                    {`
      .scrollable-text-container::-webkit-scrollbar {
        display: none; /* Hides scrollbar for Webkit browsers */
      }
    `}
                  </style>

                  <p style={{
                    fontStyle: "italic",
                    color: "#555",
                    fontSize: "1.1rem",
                    margin: 0 // Remove extra margins for better fit
                  }}>
                    {/* <img src="assets/img/quote-sign-left.png" className="quote-sign-left" alt="" /> */}
                    "Kavya collaborated with Firstminer Tech to develop a cutting-edge app and website that perfectly matched his vision. Our team focused on delivering a seamless user experience and a modern design, ensuring the final product met all expectations. Partnering with Sudhanshu was a pleasure, highlighting our commitment to innovation and excellence."
                    {/* <img src="assets/img/quote-sign-right.png" className="quote-sign-right" alt="" /> */}
                  </p>
                </div>



              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="testimonial-item text-center mb-4"
                style={{
                  borderRadius: "15px",
                  padding: "30px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  backgroundColor: "#fff",
                  height: "450px",

                }}
              >
                <img
                  src="assets/img/tm5.jpeg"
                  className="testimonial-img rounded-circle mb-3"
                  alt=""
                  style={{ border: "4px solid #fff", boxShadow: "0 4px 10px rgba(0,0,0,0.2)", transition: "transform 0.3s ease" }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: "#333" }}>Divya</h3>
                {/* <h4 style={{ fontSize: '1.1rem', color: '#777', fontWeight: '500' }}>Software Developer</h4> */}

                <div
                  className="scrollable-text-container"
                  style={{
                    maxHeight: "150px",
                    overflow: "auto",
                    scrollbarWidth: "none", // For Firefox
                    msOverflowStyle: "none" // For IE and Edge
                  }}
                >
                  <style>
                    {`
      .scrollable-text-container::-webkit-scrollbar {
        display: none; /* Hides scrollbar for Webkit browsers */
      }
    `}
                  </style>

                  <p style={{
                    fontStyle: "italic",
                    color: "#555",
                    fontSize: "1.1rem",
                    margin: 0 // Remove extra margins for better fit
                  }}>
                    {/* <img src="assets/img/quote-sign-left.png" className="quote-sign-left" alt="" /> */}
                    "Divya chose Firstminer Tech for app and website development to transform his ideas into reality. Our team worked closely with him to create a solution that combined innovation, functionality, and a user-centric design. Collaborating with Dharmesh was an inspiring journey that underscores our dedication to delivering exceptional results."
                    {/* <img src="assets/img/quote-sign-right.png" className="quote-sign-right" alt="" /> */}
                  </p>
                </div>


              </div>
            </SwiperSlide>


          </Swiper>

        </div>
        {/* </div> */}

      </div>
    </section>
  );
};

export default Testimonials;
