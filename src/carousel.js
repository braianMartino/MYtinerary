import React, { Component } from 'react';
import logo from './img/newyork.png';
import logo1 from './img/paris.jpg';
import logo2 from './img/barcelona.png';
import logo3 from './img/bogota.jpg';
import logo4 from './img/buenosaires.jpg';
import logo5 from './img/caracas.jpg';
import logo6 from './img/lapaz.jpg';
import logo7 from './img/lima.jpg';
import logo8 from './img/mexico.jpg';
import logo9 from './img/montevideo.jpg';
import logo10 from './img/sanpablo.jpg';
import logo11 from './img/Santiago-Chile.jpg';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import './css/carousell.css';


class Carousell extends Component {

  render() {
    return (
      <div className="carrusel">
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
    </div>
        );
        
  }
  
}

export default Carousell;