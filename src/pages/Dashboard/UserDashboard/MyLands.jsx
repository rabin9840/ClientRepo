import React, { useState, useContext, useEffect } from 'react'
import { LandRegistrationContext } from '../../../context/LandRegistrationContext';
import LandCard from '../../../components/LandCard';

export default function MyLands() {
    const { getAllLand, landsInfo,checkUserVerfication,isUserVerified} = useContext(LandRegistrationContext);	   
	useEffect(() => {
        async function checkUser(){
            await checkUserVerfication();
        }
        checkUser();
        
	    getAllLand();
	},[]);

    return (
        <>
        {isUserVerified && (
                    <div>
                    <div>
                        <h1>View Your Land Information:</h1>
                        <button onClick={getAllLand}>View owned lands</button>
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
                <div>
                    <h1>Not authorized</h1>
                </div>
            )
        }
        </>

    )
}