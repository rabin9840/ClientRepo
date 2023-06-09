import React, { useState, useContext, useEffect } from 'react'
import { LandRegistrationContext } from '../../../context/LandRegistrationContext';
import LandCard from '../../../components/LandCard';
import NotAuthorized from '../../../components/NotAuthorized';
import './styles/index.css'

export default function MyLands() {
    const { getAllLand, landsInfo,checkUserVerification,isUserVerified} = useContext(LandRegistrationContext);	   
	useEffect(() => {
        // async function getUserLands(){
        //     await checkUserVerification();
        // }
        async function checkUser(){
            await checkUserVerification();
        }
        checkUser();
        // checkUserVerification();
      
        
	    // getAllLand();
	},[]);

    return (
        <>
        {isUserVerified && (
                    <div>
                    <div>
                        <h1 className='text-3xl font-bold mb-4'>View Your Land Information:</h1>
                        <button onClick={getAllLand} className='buttonStyle'>View owned lands</button>
                    </div>
                    <div>
                        {
                            landsInfo.map((land, i) => (
                                <LandCard key={i}{...land} />
                            ))
                        }
                    </div>
                </div>
        )}

        {
            !isUserVerified && (
                // <div>
                //     <h1>Not authorized</h1>
                // </div>
                <NotAuthorized />
            )
        }
        </>

    )
}