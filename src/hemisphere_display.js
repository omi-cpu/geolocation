import react from "react";

const HemisphereDisplay = ({latitude}) => {
    console.log(latitude)
    //a tenary expression meaning if latitude is > 0 print nothern... else print south...
    const hemisphere = latitude > 0 ? 'Nothern Hemisphere' : 'Southern Hemisphere'
   
    return(
        <div>
            { hemisphere }
        </div>
    )
}

export default HemisphereDisplay;