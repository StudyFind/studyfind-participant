import React from 'react'
import Person from './person'
import yohan from './headshots/yohan.jpg'
import andrew from './headshots/andrew.jpg'
import vir from './headshots/vir.png'
import Slider1 from './Slider1';

function Founding_team() {
    return (
        <div className='wrapper1'>
            <p className='foundingTeam'>
                Founding Team
            </p>
            <div className='members'>
                 <Person name='Yohan Jhaveri' pic={yohan} title='Co-Founder' organization='StudyFind' linkedin='https://www.linkedin.com/in/yohanjhaveri/ '/>
                 <Person name='Andrew Garcia' pic={andrew} title='Co-Founder' organization='StudyFind' linkedin='https://www.linkedin.com/in/andrew-garcia-almeida/'/>
                 <Person name='Vir Mittal' pic={vir} title='Co-Founder' organization='StudyFind' linkedin='https://www.linkedin.com/in/vir-m-1b1981130/ '/>
            </div>
            <Slider1/>
        </div>
    )
}

export default Founding_team