import React, { useEffect,useContext } from 'react'
import { LandRegistrationContext } from '../../../context/LandRegistrationContext'; 
import LandVerifyCard from '../../../components/LandVerifyCard';
import './styles/index.css'

export default function VerifyLand() {
	const {getUserAllData, landsInfo} = useContext(LandRegistrationContext);
	// remove react strict mode in main jsx or else data would be shown two times
	// useEffect(() => {
	//     getUserAllData();
	// }, []);

	const buttonStyle = {
		marginLeft:"45%",
	}
	
  
	return (
    <div>
		<div>
			<h1 className='headingStyle'>Lands to Verify:</h1>
			<button style={buttonStyle} onClick={getUserAllData}>Land Verification</button>
		</div>
		<div>
	        {
	            landsInfo.map((land,i) => {
	                // user.name
	                // to view unverified data
	                if(!land.isVerified)
	                {
	                    return <LandVerifyCard key={i}{...land}/>
	                }
	            })
	        }
	    </div>
	</div>
  )
}