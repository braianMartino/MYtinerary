import React, { Component } from 'react';
import logo from './newyork.png';
import logo1 from './paris.jpg';
import logo2 from './barcelona.png';
import logo3 from './bogota.jpg';
import logo4 from './buenosaires.jpg';
import logo5 from './caracas.jpg';
import logo6 from './lapaz.jpg';
import logo7 from './lima.jpg';
import logo8 from './mexico.jpg';
import logo9 from './montevideo.jpg';
import logo10 from './sanpablo.jpg';
import logo11 from './Santiago-Chile.jpg';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import './carousell.css';


class Carousell extends Component {

  render() {
    return (
      
      <MDBContainer>
        <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <div className="imagen">
                <p>New York</p>
                <img className="imgcarrusel" src={logo} alt="New York"/>
              </div>
              <div className="imagen">
                <p>París</p>
                <img className="imgcarrusel" src={logo1} alt="Paris"/>
              </div>
              <div className="imagen">
                <p>Barcelona</p>
                <img className="imgcarrusel" src={logo2} alt="Barcelona"/>
              </div>
              <div className="imagen">
                <p>Bogotá</p>
                <img className="imgcarrusel" src={logo3} alt="Bogotá"/>
              </div>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
            <div className="imagen">
                <p>Bs. As.</p>
                <img className="imgcarrusel" src={logo4} alt="Buenos Aires"/>
              </div>
              <div className="imagen">
                <p>Caracas</p>
                <img className="imgcarrusel" src={logo5} alt="Caracas"/>
              </div>
              <div className="imagen">
                <p>La Paz</p>
                <img className="imgcarrusel" src={logo6} alt="La Paz"/>
              </div>
              <div className="imagen">
                <p>Lima</p>
                <img className="imgcarrusel" src={logo7} alt="Lima"/>
              </div>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <div className="imagen">
                <p>México</p>
                <img className="imgcarrusel" src={logo8} alt="México"/>
              </div>
              <div className="imagen">
                <p>Montevideo</p>
                <img className="imgcarrusel" src={logo9} alt="Montevideo"/>
              </div>
              <div className="imagen">
                <p>San Pablo</p>
                <img className="imgcarrusel" src={logo10} alt="San Pablo"/>
              </div>
              <div className="imagen">
                <p>Chile</p>
                <img className="imgcarrusel" src={logo11} alt="Santiago de Chile"/>
              </div>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
        );
  }
}

export default Carousell;