import React, { useContext, useState, useEffect } from 'react';
import { LandRegistrationContext } from '../../../context/LandRegistrationContext'; 
import RequestCard from '../../../components/RequestCard';
	
export default  function Approve() {
	const {getAllRequests, requestInfo} = useContext(LandRegistrationContext);
	
	return (
	    <div>
            <div>
                <h1>Avaliable Request of Land</h1>
                <button onClick={getAllRequests}>Available Requests</button>
            </div>
            <div>
                {
                    requestInfo.map((land, i) => {
                        // to view unverified data
                        if(!request.requestStatus)
                        {
                            return <RequestCard key={i}{...request}/>
                        }
                    })
                }
            </div>
        </div>
	);
}