import react from "react";
import './hemisphere.css';
import northernPic from './image/north.jpg';
import southPic from './image/south.png';


const hemisphereConfig = {
    Nothern: {
        text: 'it is nothern hemisphere',
        picture: northernPic
    },
    Southern: {
        text: 'it is southern hemisphere',
        picture: southPic
    }
}

const HemisphereDisplay = ({latitude}) => {
    const hemisphere = latitude > 0 ? 'Nothern' : 'Southern' ;
    const { text, picture } = hemisphereConfig[hemisphere]

    return(
        <div className={hemisphere}>
            <div className='ui raised text container segment'>
                <div className='image'>
                    <img src= {picture} alt="hemisphere picture" /> 
                </div>
                <div className='ui teal bottom attached label'>
                    <h1>{ text }</h1>
                </div>
                
            </div>
            
        </div>
    )
}

export default HemisphereDisplay;