import React from 'react'
import Person from './person'
import steven from './headshots/steven.jpg'
import reina from './headshots/reina.png'
import ayesha from './headshots/ayesha.png'
import talia from './headshots/talia.png'
import hannah from './headshots/hannah.jpg'
import romina from './headshots/romina.jpg'
import suraj from './headshots/suraj.jpg'
import evans from './headshots/evans.png'
import gabrielle from './headshots/gabrielle.png'
import alexis from './headshots/alexis.png'
import aidan from './headshots/aidan.png'
import Slider2 from './Slider2';



function AdvisoryBoard() {
    return (
        <div className='wrapper2'>
            <p className='advisoryBoard'>
                National Advisory Board
            </p>
            <div className='members'>
                 <Person name='Steven Choi' pic={steven} title='Clinical Research Coordinator' organization='ThreeWire' linkedin='https://www.linkedin.com/in/steven-choi-3b547973/'/>
                 <Person name='Reina Factor, Ph.D.' pic={reina} title='Postdoctoral Clinical Research Fellow' organization='UCLA Semel Institute for Neuroscience and Human Behavior' linkedin='https://www.linkedin.com/in/reina-factor-5a5745202/'/>
                 <Person name='Ayesha Hameed' pic={ayesha} title='Clinical Research Coordinator' organization='BioPharma Informatic, Houston Tx' linkedin='https://www.linkedin.com/in/ayesha-hameed-20196a40/'/>
                 <Person name='Talia Korn' pic={talia} title='Clinical Research Coordinator II' organization='Mount Sinai Health System' linkedin='https://www.linkedin.com/in/talia-korn-3a28b4132/ '/>
                 <Person name='Hannah Lipper' pic={hannah} title='Owner, Artist, and Creative Director' organization='Cosmos Pottery' linkedin='https://www.linkedin.com/in/hannah-s-lipper-mph-she-her-2190a765/'/>
                 <Person name='Romina Nejad' pic={romina} title='Clinical Research Coordinator II' organization='Stanford University' linkedin='https://www.linkedin.com/in/romina-nejad/ '/>
                 <Person name='Suraj Chandy Oomman' pic={suraj} title='Medical Operations Specialist at Syneos Health' organization='Institute of Trauma Recovery, Dept. of Anesthesiology, UNC-Chapel Hill' linkedin='https://www.linkedin.com/in/surajoomman/ '/>
                 <Person name='Evans D. Pope, III' pic={evans} title='Incoming PharmD Candidate' organization='Cleveland Clinic Lou Ruvo Center for Brain Health' linkedin='https://www.linkedin.com/in/evans-d-pope-iii-ms-4839a118/  '/>
                 <Person name='Gabrielle Schiller' pic={gabrielle} title='Public Health Researcher | Clinical Research Coordinator | Incoming Doctoral Student' organization='Icahn School of Medicine at Mount Sinai - New York, NY' linkedin='https://www.linkedin.com/in/gabrielle-schiller/ '/>
                 <Person name='Alexis Whitmire' pic={alexis} title='SUPERNOVA Program Manager at Foundation for Atlanta Veterans Education and Research' organization='FAVER (Atlanta VA Medical Center)' linkedin='https://www.linkedin.com/in/alexiswhitmire/'/> 
                 <Person name='Aidan Williams' pic={aidan} title=' Clinical Research Coordinator' organization='Medical College of Wisconsin, Froedtert Hospital' linkedin='https://www.linkedin.com/in/aidan-williams-13a93a12a/ '/> 
            </div>
            <Slider2/>

        </div>
    )

}

export default AdvisoryBoard