import React, { useState, useContext, useEffect } from 'react'
import { LandRegistrationContext } from '../../../context/LandRegistrationContext';
// import VerifiedRequestCard from '../Components/VerifiedRequestCard';
import VerifiedRequestCard from '../../../components/VerifiedRequestCard';
import './styles/index.css'

export default function TransferOwnership() {
	const { getApprovedRequests, requestInfo } = useContext(LandRegistrationContext);
	const buttonStyle = {
		marginLeft:"50%",
	}
	
	return (
		<div>
			<div>
				<h1 className='headingStyle'>Available Request To Transfer Land Ownership</h1>
				<button style={buttonStyle} onClick={getApprovedRequests}>Approved Requests</button>
			</div>
			<div>
			{
	            requestInfo.map((request, i) => {
	                // user.name
	                // to view unverified data
	                if(!request.isTransfered)
	                {
	                    return <VerifiedRequestCard key={i}{...request}/>
	                }
	            })
	        }
			</div>
		</div>
	)
}