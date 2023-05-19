import React, { useContext, useState, useEffect } from 'react';
import { LandRegistrationContext } from '../../../context/LandRegistrationContext'; 
import RequestCard from '../../../components/RequestCard';
import NotAuthorized from '../../../components/NotAuthorized';
import './styles/index.css'
	
export default  function Approve() {
	const {getAllRequests, requestInfo,isUserVerified,checkUserVerification} = useContext(LandRegistrationContext);
	
    useEffect(()=>{
        async function checkUser(){
            await checkUserVerification();

        }
     checkUser();
    //  getAllRequests();

  
    },[])
	return (
        <>
        {
            isUserVerified && (
                <div>
                <div>
                    <h1 className='text-3xl font-bold mb-4'>Avaliable Request of Land</h1>
                    <button onClick={getAllRequests} className='buttonStyle'>Available Requests</button>
                </div>
                <div>
                    {
                        requestInfo.map((request, i) => {
                            // to view unverified data
                            if(!request.requestStatus)
                            {
                                return <RequestCard key={i}{...request}/>
                            }
                        })
                    }
                </div>
            </div>
            )
        }

        {

            !isUserVerified && (
                <NotAuthorized />
            )
        }
        </>

	);
}