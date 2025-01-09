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

              <div className="testimonial-item text-center mb-4" style={{ borderRadius: "15px", padding: "30px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", backgroundColor: "#fff" }}>

                <img
                  src="assets/img/testimonial-1.jpg"
                  className="testimonial-img rounded-circle mb-3"
                  alt=""
                  style={{ border: "4px solid #fff", boxShadow: "0 4px 10px rgba(0,0,0,0.2)", transition: "transform 0.3s ease" }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: "#333" }}>Yugal Kishor</h3>
                <h4 style={{ fontSize: '1.1rem', color: '#777', fontWeight: '500' }}>CEO & Founder</h4>

                <p style={{ fontStyle: "italic", color: "#555", fontSize: "1.1rem" }}>
                  {/* <img src="assets/img/quote-sign-left.png" className="quote-sign-left" alt="" /> */}
                  Yugal Kishor is the CEO and Founder, a dynamic leader known for his strategic vision and commitment to innovation.
                  His dedication to excellence has driven the company’s growth and success.
                  With a focus on quality and leadership, Yugal has earned recognition and respect in the business community.
                  {/* <img src="assets/img/quote-sign-right.png" className="quote-sign-right" alt="" /> */}
                </p>


              </div>
            </SwiperSlide>

            {/* Second Slide */}
            <SwiperSlide>
              <div className="testimonial-item text-center mb-4" style={{ borderRadius: "15px", padding: "30px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", backgroundColor: "#fff" }}>

                <img
                  src="assets/img/testimonial-2.jpg"
                  className="testimonial-img rounded-circle mb-3"
                  alt=""
                  style={{ border: "4px solid #fff", boxShadow: "0 4px 10px rgba(0,0,0,0.2)", transition: "transform 0.3s ease" }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: "#333" }}>Harish Giri</h3>
                <h4 style={{ fontSize: '1.1rem', color: '#777', fontWeight: '500' }}>CEO & Founder</h4>

                <p style={{ fontStyle: "italic", color: "#555", fontSize: "1.1rem" }}>
                  {/* <img src="assets/img/quote-sign-left.png" className="quote-sign-left" alt="" /> */}

                  Harish Giri is the CEO and Founder, a dynamic leader known for his strategic vision and commitment to innovation.
                  His dedication to excellence has driven the company’s growth and success.
                  With a focus on quality and leadership, Yugal has earned recognition and respect in the business community.
                  {/* <img src="assets/img/quote-sign-right.png" className="quote-sign-right" alt="" /> */}
                </p>


              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item text-center mb-4" style={{ borderRadius: "15px", padding: "30px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", backgroundColor: "#fff" }}>

                <img
                  src="assets/img/logo-final.png"
                  className="testimonial-img rounded-circle mb-3"
                  alt=""
                  style={{ border: "4px solid #fff", boxShadow: "0 4px 10px rgba(0,0,0,0.2)", transition: "transform 0.3s ease" }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />

                {/* <img src="assets/img/quote-sign-left.png" className="quote-sign-left" alt="" /> */}
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: "#333" }}>Anik Ranjan</h3>
                {/* <img src="assets/img/quote-sign-right.png" className="quote-sign-right" alt="" /> */}
                <h4 style={{ fontSize: '1.1rem', color: '#777', fontWeight: '500' }}>Software Developer</h4>

                <p style={{ fontStyle: "italic", color: "#555", fontSize: "1.1rem" }}>
                  Anik Ranjan is a skilled Software Developer known for his expertise in problem-solving.
                  With a passion for technology and innovation, he continuously strives to create efficient
                  and user-friendly software solutions.
                  Anik's dedication to his craft has made him a valuable contributor to the development industry.

                </p>


              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className="testimonial-item text-center mb-4" style={{ borderRadius: "15px", padding: "30px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", backgroundColor: "#fff" }}>
                <img
                  src="assets/img/logo-final.png"
                  className="testimonial-img rounded-circle mb-3"
                  alt=""
                  style={{ border: "4px solid #fff", boxShadow: "0 4px 10px rgba(0,0,0,0.2)", transition: "transform 0.3s ease" }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: "#333" }}>Sudhanshu Kanwar</h3>
                <h4 style={{ fontSize: '1.1rem', color: '#777', fontWeight: '500' }}>Software Developer</h4>

                <p style={{ fontStyle: "italic", color: "#555", fontSize: "1.1rem" }}>
                  {/* <img src="assets/img/quote-sign-left.png" className="quote-sign-left" alt="" /> */}
                  Sudhanshu Kanwar is a talented Developer with a passion for coding and technology.
                  He specializes in creating innovative solutions and optimizing systems for improved functionality.
                  Known for his problem-solving skills , Sudhanshu consistently contributes to the development of  software projects.
                  {/* <img src="assets/img/quote-sign-right.png" className="quote-sign-right" alt="" /> */}
                </p>


              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item text-center mb-4" style={{ borderRadius: "15px", padding: "30px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", backgroundColor: "#fff" }}>
                <img
                  src="assets/img/logo-final.png"
                  className="testimonial-img rounded-circle mb-3"
                  alt=""
                  style={{ border: "4px solid #fff", boxShadow: "0 4px 10px rgba(0,0,0,0.2)", transition: "transform 0.3s ease" }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: "#333" }}>Dharmesh Darshan</h3>
                <h4 style={{ fontSize: '1.1rem', color: '#777', fontWeight: '500' }}>Software Developer</h4>

                <p style={{ fontStyle: "italic", color: "#555", fontSize: "1.1rem" }}>
                  {/* <img src="assets/img/quote-sign-left.png" className="quote-sign-left" alt="" /> */}
                  Dharmesh Darshan is a skilledDeveloper with a strong expertise in building innovative and efficient software solutions.
                  His problem-solving abilities  help create seamless user experiences.
                  Dharmesh is committed to continuous learning  high-quality work, making him a valuable asset to the tech community.
                  {/* <img src="assets/img/quote-sign-right.png" className="quote-sign-right" alt="" /> */}
                </p>


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
