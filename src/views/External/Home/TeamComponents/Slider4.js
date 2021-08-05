import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Person from "./person";
import mikolaj from './headshots/mikolaj.jpg'
import mileen from './headshots/mileen.jpg'
import natalie from './headshots/natalie.jpg'
import ziyao from './headshots/ziyao.jpg'
import michael from './headshots/michael.jpg'
import sundari from './headshots/sundari.jpg'
import gustavo from './headshots/gustavo.jpg'


export default class Slider4 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className='slides'> 
        <Slider {...settings} >
          <div >
                <Person name='Mikolaj Figurski' pic={mikolaj} title='' organization='Full-Stack Team' linkedin='https://www.linkedin.com/in/mikolaj-figurski-1257a7149/'/>
          </div>
          <div>
                <Person name='Mileen Meyer' pic={mileen} title='' organization='Marketing Team' linkedin='https://www.linkedin.com/in/mileenmeyer/'/>
          </div>
          <div>
                <Person name='Natalie Merizalde' pic={natalie} title='' organization='Marketing Team' linkedin='https://www.linkedin.com/in/natalie-m-115095136/'/>
          </div>
          <div>
                <Person name='Ziyao Ren' pic={ziyao} title='' organization='Full-Stack Team' linkedin='https://www.linkedin.com/in/ziyaoren/'/>

          </div>
          <div>
                <Person name='Michael Albo' pic={michael} title='' organization='Full-Stack Team' linkedin='https://www.linkedin.com/in/michael-albo-55b74b196/'/>

          </div>
          <div>
                <Person name='Sundari Arunarasu' pic={sundari} title='' organization='Full-Stack Team' linkedin='https://www.linkedin.com/in/sivasomasundari-arunarasu-6299131a6/'/>

          </div>
          <div>
                <Person name='Gustavo Fonseca' pic={gustavo} title='' organization='Data & ML Team' linkedin='https://www.linkedin.com/in/gustavo-fonseca-a69b55135/'/>

          </div>
        </Slider>
      </div>
    );
  }
}