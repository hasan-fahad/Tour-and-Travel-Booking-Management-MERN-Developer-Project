import { Col, Container, Row } from 'reactstrap';
import'./Home.css'
import heroImg from '../../assets/images/hero-img01.jpg'
import heroImg02 from '../../assets/images/hero-img02.jpg'
import heroVideo from '../../assets/images/hero-video.mp4'
import worldImg from '../../assets/images/world.png'
import Subtitle from '../../Shared/Subtitle';
import SearchBar from '../../Shared/SearchBar';
const Home = () => {
    return (
      <>
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
      </>
    );
}; 

export default Home;