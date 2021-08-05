import React from 'react'
import Person from './person'
import mikolaj from './headshots/mikolaj.jpg'
import mileen from './headshots/mileen.jpg'
import natalie from './headshots/natalie.jpg'
import ziyao from './headshots/ziyao.jpg'
import michael from './headshots/michael.jpg'
import sundari from './headshots/sundari.jpg'
import gustavo from './headshots/gustavo.jpg'
import Slider4 from './Slider4';

function NotableAlum() {
     return (
         <div className='wrapper4'>
             <p className='alumni'>
                Notable Alumni
            </p>
            <div className='members'>
                <Person name='Mikolaj Figurski' pic={mikolaj} title='' organization='Full-Stack Team' linkedin='https://www.linkedin.com/in/mikolaj-figurski-1257a7149/'/>
                <Person name='Mileen Meyer' pic={mileen} title='' organization='Marketing Team' linkedin='https://www.linkedin.com/in/mileenmeyer/'/>
                <Person name='Natalie Merizalde' pic={natalie} title='' organization='Marketing Team' linkedin='https://www.linkedin.com/in/natalie-m-115095136/'/>
                <Person name='Ziyao Ren' pic={ziyao} title='' organization='Full-Stack Team' linkedin='https://www.linkedin.com/in/ziyaoren/'/>
                <Person name='Michael Albo' pic={michael} title='' organization='Full-Stack Team' linkedin='https://www.linkedin.com/in/michael-albo-55b74b196/'/>
                <Person name='Sundari Arunarasu' pic={sundari} title='' organization='Full-Stack Team' linkedin='https://www.linkedin.com/in/sivasomasundari-arunarasu-6299131a6/'/>
                <Person name='Gustavo Fonseca' pic={gustavo} title='' organization='Data & ML Team' linkedin='https://www.linkedin.com/in/gustavo-fonseca-a69b55135/'/>

            </div>
            <Slider4/>

         </div>
        

    )
}

export default NotableAlum