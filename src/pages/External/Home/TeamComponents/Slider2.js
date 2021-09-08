import React, { Component } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Person from "./person";
import steven from "./headshots/steven.jpg";
import reina from "./headshots/reina.png";
import ayesha from "./headshots/ayesha.png";
import talia from "./headshots/talia.png";
import hannah from "./headshots/hannah.jpg";
import romina from "./headshots/romina.jpg";
import suraj from "./headshots/suraj.jpg";
import evans from "./headshots/evans.png";
import gabrielle from "./headshots/gabrielle.png";
import alexis from "./headshots/alexis.png";
import aidan from "./headshots/aidan.png";

export default class Slider2 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="slides">
        <Slider {...settings}>
          <div>
            <Person
              name="Steven Choi"
              pic={steven}
              title="Clinical Research Coordinator"
              organization="ThreeWire"
              linkedin="https://www.linkedin.com/in/steven-choi-3b547973/"
            />
          </div>
          <div>
            <Person
              name="Reina Factor, Ph.D."
              pic={reina}
              title="Postdoctoral Clinical Research Fellow"
              organization="UCLA Semel Institute for Neuroscience and Human Behavior"
              linkedin="https://www.linkedin.com/in/reina-factor-5a5745202/"
            />
          </div>
          <div>
            <Person
              name="Ayesha Hameed"
              pic={ayesha}
              title="Clinical Research Coordinator"
              organization="BioPharma Informatic, Houston Tx"
              linkedin="https://www.linkedin.com/in/ayesha-hameed-20196a40/"
            />
          </div>
          <div>
            <Person
              name="Talia Korn"
              pic={talia}
              title="Clinical Research Coordinator II"
              organization="Mount Sinai Health System"
              linkedin="https://www.linkedin.com/in/talia-korn-3a28b4132/ "
            />
          </div>
          <div>
            <Person
              name="Hannah Lipper"
              pic={hannah}
              title="Owner, Artist, and Creative Director"
              organization="Cosmos Pottery"
              linkedin="https://www.linkedin.com/in/hannah-s-lipper-mph-she-her-2190a765/"
            />
          </div>
          <div>
            <Person
              name="Romina Nejad"
              pic={romina}
              title="Clinical Research Coordinator II"
              organization="Stanford University"
              linkedin="https://www.linkedin.com/in/romina-nejad/ "
            />
          </div>
          <div>
            <Person
              name="Suraj Chandy Oomman"
              pic={suraj}
              title="Medical Operations Specialist at Syneos Health"
              organization="Institute of Trauma Recovery, Dept. of Anesthesiology, UNC-Chapel Hill"
              linkedin="https://www.linkedin.com/in/surajoomman/ "
            />
          </div>
          <div>
            <Person
              name="Evans D. Pope, III"
              pic={evans}
              title="Incoming PharmD Candidate"
              organization="Cleveland Clinic Lou Ruvo Center for Brain Health"
              linkedin="https://www.linkedin.com/in/evans-d-pope-iii-ms-4839a118/  "
            />
          </div>
          <div>
            <Person
              name="Gabrielle Schiller"
              pic={gabrielle}
              title="Public Health Researcher | Clinical Research Coordinator | Incoming Doctoral Student"
              organization="Icahn School of Medicine at Mount Sinai - New York, NY"
              linkedin="https://www.linkedin.com/in/gabrielle-schiller/ "
            />
          </div>
          <div>
            <Person
              name="Alexis Whitmire"
              pic={alexis}
              title="SUPERNOVA Program Manager at Foundation for Atlanta Veterans Education and Research"
              organization="FAVER (Atlanta VA Medical Center)"
              linkedin="https://www.linkedin.com/in/alexiswhitmire/"
            />
          </div>
          <div>
            <Person
              name="Aidan Williams"
              pic={aidan}
              title=" Clinical Research Coordinator"
              organization="Medical College of Wisconsin, Froedtert Hospital"
              linkedin="https://www.linkedin.com/in/aidan-williams-13a93a12a/ "
            />
          </div>
        </Slider>
      </div>
    );
  }
}
