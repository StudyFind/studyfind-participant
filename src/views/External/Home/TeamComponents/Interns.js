import React from 'react'
import Person from './person'
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

import Slider3 from './Slider3';

function Interns() {
    return (
        <div className='wrapper3'>
            <p className='interns'>
                Interns
            </p>
            <div className='members'>
                <Person name='Weiting Mo' pic={weiting} title='Sr. Software Developer' organization='Data & ML Team' linkedin='https://www.linkedin.com/in/weiting-mo-82974b138/'/>
                <Person name='Wenkai Zheng' pic={wenkai} title='Sr. Software Developer' organization='Back-End Team' linkedin='https://www.linkedin.com/in/wenkai-zheng/'/>
                <Person name='Keely Culbertson' pic={keely} title='Software Developer' organization='Full-Stack Team' linkedin='https://www.linkedin.com/in/keely-culbertson/'/>
                <Person name='David Chen' pic={david} title='Software Developer' organization='Full-Stack Team' linkedin='https://www.linkedin.com/in/david-chen-105ba9158/'/>
                <Person name='Jeremy Webb' pic={jeremy} title='Software Developer' organization='Full-Stack Team' linkedin='https://www.linkedin.com/in/jwebb45/'/>
                <Person name='Jonathon Sisson' pic={jonathon} title='Software Developer' organization='Full-Stack Team' linkedin='https://www.linkedin.com/in/jonathon-sisson/'/>
                <Person name='Liang Chen' pic={liang} title='Software Developer' organization='Back-End Team' linkedin=''/>
                <Person name='Yuyao Wang' pic={yuyao} title='Jr. Software Developer' organization='Data & ML Team' linkedin='https://www.linkedin.com/in/yuyao-wang-march/'/>
                <Person name='Jason Ji' pic={jason} title='Jr. Software Developer' organization='Full-Stack Team' linkedin='https://www.linkedin.com/in/jason-ji-566673166/'/>
                <Person name='Eric Park' pic={eric} title='Jr. Software Developer' organization='Full-Stack Team' linkedin='https://www.linkedin.com/in/eric-park-1a03421b7/'/>
            </div>
            <Slider3/>
        </div>
        

    )
}

export default Interns