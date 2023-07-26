import { Col, Container, Row } from 'reactstrap';
import'./Home.css'
import heroImg from '../../assets/images/hero-img01.jpg'
import heroImg02 from '../../assets/images/hero-img02.jpg'
import heroVideo from '../../assets/images/hero-video.mp4'
import worldImg from '../../assets/images/world.png'
import Subtitle from '../../Shared/Subtitle';
import SearchBar from '../../Shared/SearchBar';
import ServiceList from '../../Service/ServiceList';
import FeaturedTourList from '../FeaturedTourList/FeaturedTourList';
import experienceImg from '../../assets/images/experience.png'
import MasonryImageGallery from '../../Image-gallery/MasonryImageGallery';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
      <>
      <section>
        {/* hero section start */}

      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"Know Before You Go"} >
                </Subtitle>
                <img src={worldImg} alt="" />
              </div>
              <h1>
                Traveling opens the door to creating {" "}
                <span className="highlight">memories</span>
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus dolore accusantium voluptatem dolorum fugiat beatae tenetur laborum unde ad ab quo, laboriosam voluptatibus ullam fugit. Voluptatibus culpa aut cum modi?
              </p>
            </div>
          </Col>
          <Col lg="2">
          <div className="hero__img-box">
            <img src={heroImg} alt="" />
          </div>
          </Col>
          <Col lg="2">
          <div className="hero__img-box mt-4">
            <video src={heroVideo} alt="" controls />
          </div>
          </Col>
          <Col lg="2">
          <div className="hero__img-box mt-5">
            <img src={heroImg02} alt="" />
          </div>
          </Col>
          <SearchBar></SearchBar>
        </Row>
      </Container>
      </section>

      {/* Hero section end */}

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we Serve</h5>
              <h2 className="services__title">We offer our best serices</h2>
            </Col>
            <ServiceList></ServiceList>
          </Row>
          
        </Container>
      </section>

          {/* Featured tour section start */}

          <section>
            <Container>
              <Row>
                <Col lg="12" className="mb-5">
                  <Subtitle subtitle={"Explore"}></Subtitle>
                  <h2 className="featured__tour-title">
                    Our Featured tours
                  </h2>
                </Col>
                <FeaturedTourList></FeaturedTourList>
              </Row>
            </Container>
          </section>



          {/* Featured tour section end */}

          {/* Experience section start */}

        <section>
          <Container>
            <Row>
              <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"}></Subtitle>
                <h2>
                  With our all experience <br />we will serve you
                </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                <br />
                Inventore necessitatibus vel temporibus laborum ipsa ipsam. 
              </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successfull trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>2+</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
              
              </Col>
              <Col lg="6">
                <div className="experience__img">
                  <img src={experienceImg} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

{/* Experience section end */}

{/* Gallery section start */}
<section>
  <Container>
    <Row>
      <Col lg="12">
        <Subtitle subtitle={"Gallery"}></Subtitle>
        <h2 className="gallery__title">
          Visit our customers tour gallery
        </h2>
        
      </Col>
      <Col lg="12">
      <MasonryImageGallery></MasonryImageGallery>
      </Col>
    </Row>
  </Container>
</section>


{/* Gallery section end */}

{/* Testimonial start */}

<section>
  <Container>
    <Row>
      <Col lg="12">
        <Subtitle subtitle={"Fans Love"}>

        </Subtitle>
        <h2 className="testimonial__title">
          What our fans say about us
        </h2>
        
      </Col>
      <Col lg="12">
      <Testimonials></Testimonials>
      </Col>
      
    </Row>
  </Container>
</section>

{/* Testimonial end */}

      </>
    );
}; 

export default Home;