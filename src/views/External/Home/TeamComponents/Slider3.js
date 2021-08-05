import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Person from "./person";
import weiting from './headshots/weiting.jpg'
import wenkai from './headshots/wenkai.jpg'
import keely from './headshots/keely.jpg'
import david from './headshots/david.jpg'
import jeremy from './headshots/jeremy.jpg'
import jonathon from './headshots/jonathon.jpg'
import liang from './headshots/liang.jpg'
import yuyao from './headshots/yuyao.jpg'
import eric from './headshots/eric.jpg'
import jason from './headshots/jason.JPG'

export default class Slider1 extends Component {
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
            <Person name='Weiting Mo' pic={weiting} title='Sr. Software Developer' organization='Data & ML Team' linkedin='https://www.linkedin.com/in/weiting-mo-82974b138/'/>
                  </div>
          <div>
            <Person name='Wenkai Zheng' pic={wenkai} title='Sr. Software Developer' organization='Back-End Team' linkedin='https://www.linkedin.com/in/wenkai-zheng/'/>
          </div>
          <div>
            <Person name='Keely Culbertson' pic={keely} title='Software Developer' organization='Full-Stack Team' linkedin='https://www.linkedin.com/in/keely-culbertson/'/>
          </div>
          <div>
            <Person name='David Chen' pic={david} title='Software Developer' organization='Full-Stack Team' linkedin='https://www.linkedin.com/in/david-chen-105ba9158/'/>

          </div>
          <div>
            <Person name='Jeremy Webb' pic={jeremy} title='Software Developer' organization='Full-Stack Team' linkedin='https://www.linkedin.com/in/jwebb45/'/>

          </div>
          <div>
            <Person name='Jonathon Sisson' pic={jonathon} title='Software Developer' organization='Full-Stack Team' linkedin='https://www.linkedin.com/in/jonathon-sisson/'/>

          </div>
          <div>
             <Person name='Liang Chen' pic={liang} title='Software Developer' organization='Back-End Team' linkedin=''/>

          </div>
          <div>
            <Person name='Yuyao Wang' pic={yuyao} title='Jr. Software Developer' organization='Data & ML Team' linkedin='https://www.linkedin.com/in/yuyao-wang-march/'/>

          </div>
          <div>
            <Person name='Jason Ji' pic={jason} title='Jr. Software Developer' organization='Full-Stack Team' linkedin='https://www.linkedin.com/in/jason-ji-566673166/'/>

          </div>
          <div>
            <Person name='Eric Park' pic={eric} title='Jr. Software Developer' organization='Full-Stack Team' linkedin='https://www.linkedin.com/in/eric-park-1a03421b7/'/>
 
          </div>
        </Slider>
      </div>
    );
  }
}