import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="wow fadeInUp" style={{ backgroundColor: "#f9f9f9", padding: "60px 0" }}>
      <div className="container">
        

        {/* Swiper Component */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          slidesPerView={3}
          speed={800}
          style={{ paddingBottom: "40px" }}
          breakpoints={{
            1024: {
              slidesPerView: 3, 
            },
            768: {
              slidesPerView: 2, 
            },
            480: {
              slidesPerView: 1,
            },
          }}
          
        >
          {/* First Slide */}
          <SwiperSlide>
            <div className="testimonial-item text-center mb-4" style={{ borderRadius: "15px", padding: "30px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", backgroundColor: "#fff" }}>
              <p style={{ fontStyle: "italic", color: "#555", fontSize: "1.1rem" }}>
                <img src="assets/img/quote-sign-left.png" className="quote-sign-left" alt="" />
                Proin iaculis purus consequat sem cure dignissim donec porttitor entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <img src="assets/img/quote-sign-right.png" className="quote-sign-right" alt="" />
              </p>
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
            </div>
          </SwiperSlide>

          {/* Second Slide */}
          <SwiperSlide>
            <div className="testimonial-item text-center mb-4" style={{ borderRadius: "15px", padding: "30px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", backgroundColor: "#fff" }}>
              <p style={{ fontStyle: "italic", color: "#555", fontSize: "1.1rem" }}>
                <img src="assets/img/quote-sign-left.png" className="quote-sign-left" alt="" />
                Proin iaculis purus consequat sem cure dignissim donec porttitor entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <img src="assets/img/quote-sign-right.png" className="quote-sign-right" alt="" />
              </p>
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
            </div>
          </SwiperSlide>

          {/* Third Slide */}
          <SwiperSlide>
            <div className="testimonial-item text-center mb-4" style={{ borderRadius: "15px", padding: "30px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", backgroundColor: "#fff" }}>
              <p style={{ fontStyle: "italic", color: "#555", fontSize: "1.1rem" }}>
                <img src="assets/img/quote-sign-left.png" className="quote-sign-left" alt="" />
                Proin iaculis purus consequat sem cure dignissim donec porttitor entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <img src="assets/img/quote-sign-right.png" className="quote-sign-right" alt="" />
              </p>
              <img
                src="assets/img/testimonial-3.jpg"
                className="testimonial-img rounded-circle mb-3"
                alt=""
                style={{ border: "4px solid #fff", boxShadow: "0 4px 10px rgba(0,0,0,0.2)", transition: "transform 0.3s ease" }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              />
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: "#333" }}>Deepak Soni</h3>
              <h4 style={{ fontSize: '1.1rem', color: '#777', fontWeight: '500' }}>Sineor Developer</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-item text-center mb-4" style={{ borderRadius: "15px", padding: "30px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", backgroundColor: "#fff" }}>
              <p style={{ fontStyle: "italic", color: "#555", fontSize: "1.1rem" }}>
                <img src="assets/img/quote-sign-left.png" className="quote-sign-left" alt="" />
                Proin iaculis purus consequat sem cure dignissim donec porttitor entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <img src="assets/img/quote-sign-right.png" className="quote-sign-right" alt="" />
              </p>
              <img
                src="assets/img/testimonial-3.jpg"
                className="testimonial-img rounded-circle mb-3"
                alt=""
                style={{ border: "4px solid #fff", boxShadow: "0 4px 10px rgba(0,0,0,0.2)", transition: "transform 0.3s ease" }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              />
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: "#333" }}>Anik Ranjan</h3>
              <h4 style={{ fontSize: '1.1rem', color: '#777', fontWeight: '500' }}>Software Developer</h4>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="testimonial-item text-center mb-4" style={{ borderRadius: "15px", padding: "30px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", backgroundColor: "#fff" }}>
              <p style={{ fontStyle: "italic", color: "#555", fontSize: "1.1rem" }}>
                <img src="assets/img/quote-sign-left.png" className="quote-sign-left" alt="" />
                Proin iaculis purus consequat sem cure dignissim donec porttitor entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <img src="assets/img/quote-sign-right.png" className="quote-sign-right" alt="" />
              </p>
              <img
                src="assets/img/testimonial-3.jpg"
                className="testimonial-img rounded-circle mb-3"
                alt=""
                style={{ border: "4px solid #fff", boxShadow: "0 4px 10px rgba(0,0,0,0.2)", transition: "transform 0.3s ease" }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              />
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: "#333" }}>Sudhanshu Kanwar</h3>
              <h4 style={{ fontSize: '1.1rem', color: '#777', fontWeight: '500' }}>Software Developer</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-item text-center mb-4" style={{ borderRadius: "15px", padding: "30px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", backgroundColor: "#fff" }}>
              <p style={{ fontStyle: "italic", color: "#555", fontSize: "1.1rem" }}>
                <img src="assets/img/quote-sign-left.png" className="quote-sign-left" alt="" />
                Proin iaculis purus consequat sem cure dignissim donec porttitor entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <img src="assets/img/quote-sign-right.png" className="quote-sign-right" alt="" />
              </p>
              <img
                src="assets/img/testimonial-3.jpg"
                className="testimonial-img rounded-circle mb-3"
                alt=""
                style={{ border: "4px solid #fff", boxShadow: "0 4px 10px rgba(0,0,0,0.2)", transition: "transform 0.3s ease" }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              />
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: "#333" }}>Dharmesh Darshan</h3>
              <h4 style={{ fontSize: '1.1rem', color: '#777', fontWeight: '500' }}>Software Developer</h4>
            </div>
          </SwiperSlide>


        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
