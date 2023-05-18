import React, { useState, useEffect,useContext } from 'react'
import {LandRegistrationContext} from '../../../context/LandRegistrationContext'
import AllLandCard from '../../../components/AllLandCard';
import NotAuthorized from '../../../components/NotAuthorized';

export default function RequestLand() {
    const { getAllLands, allLandsInfo,checkUserVerification,isUserVerified,currentAccount} = useContext(LandRegistrationContext);
	//  to load the address when loading the page
	// remove react strict mode in main jsx or else data would be shown two times
	
    useEffect(() => {
        async function checkUser(){
            await checkUserVerification();

        }
        checkUser();
	    // getAllLands();
	}, []);


    return (
        <>
        {
            isUserVerified && (
                <div>
                <div>
                    <h1>Avaliable Lands</h1>
                    <button onClick={getAllLands}>Available Lands</button>
                </div>
                <div>
                    {
                        allLandsInfo.map((land, i) => {
                            // to view unverified data
                            // the current user should not be the owner of the availble land to perform selling transaction
                            console.log(land.isVerified);
                            console.log(typeof(land.isVerified));
                            
                            console.log('landOwner address'+land.landOwnerAddress);
                            console.log(currentAccount);
                            console.log(land.landOwnerAddress===currentAccount);
                            
                            // only show the availabe land when it is verified by admin
                            // and only to the users who donot own that land. 
                            if(land.isVerified==="true" && (land.landOwnerAddress!=currentAccount))
                            {
                                return <AllLandCard key={i}{...land}/>
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

    )
}