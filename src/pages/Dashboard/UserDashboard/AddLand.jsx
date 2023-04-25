import React, { useContext } from 'react'
import { LandRegistrationContext } from '../../../context/LandRegistrationContext';
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useEffect } from 'react';
import NotAuthorized from '../../../components/NotAuthorized';

export default function AddLand() {
    const {formData, handleChange, addLandTo,checkUserVerified, currentAccount,checkUserVerification,getCurrentAccount,isUserVerified} = useContext(LandRegistrationContext);

    const handleSubmit = (e) => {
        const {landId,area,city,pradesh,propertyId,document}= formData;
        e.preventDefault();
        addLandTo();
    }


    useEffect(()=>{
        async function checkUser(){
            console.log("inside useeffect"+ await checkUserVerification());

        }
     checkUser();
        console.log('is user verfied'+isUserVerified);
  
    },[])

    return(
        <>
        {isUserVerified &&(
        <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
                Add Land
            </Typography>
            
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                    <Input
                        type="number"
                        name="area"
                        label="Area (in sq.m)"
                        onChange={handleChange}
                    />
                    <Input
                        type="text"
                        name="city"
                        label="City"
                        onChange={handleChange}
                    />
                    <Input
                        type="text"
                        name="pradesh"
                        label="Pradesh"
                        onChange={handleChange}
                    />
                    <Input
                        type="number"
                        name="propertyId"
                        label="Property ID"
                        onChange={handleChange}
                    />
                    <Input
                        type="file"
                        name="document"
                        label="Document"
                        onChange={handleChange}
                    />
                </div>
                
                <Button className="mt-6" onClick={handleSubmit} fullWidth>
                    Add
                </Button>
                
                <Button onClick={checkUserVerification}>check user verified or not</Button>
            </form>
        </Card>
    
)
    }
    { !isUserVerified &&
        
            // <div>
            //     <h1>This operation can only be performed when you are verified</h1>
            // </div>
            <NotAuthorized />
        
    }
        </>


    )
}