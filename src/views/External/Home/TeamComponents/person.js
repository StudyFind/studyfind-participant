import React from 'react'
import linkedinLogo from './LinkedIn-Logos/LI-In-Bug.png'

function Person(props){

    return (
        <div className='person'>
            <img src={props.pic} alt= ''className='headshot'></img>
            <p className='name'>{props.name}</p>
            <p className='title'>{props.title}</p>
            <p className='org'>{props.organization}</p>
            <a href={props.linkedin}><img src={linkedinLogo} alt='' className='linkedinLogo'></img></a>
        </div>
       
    )
}

export default Person