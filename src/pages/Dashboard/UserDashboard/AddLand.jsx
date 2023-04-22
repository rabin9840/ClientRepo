import React, { useContext } from 'react'
import { LandRegistrationContext } from '../../../context/LandRegistrationContext';
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useEffect } from 'react';

export default function AddLand() {
    const {formData, handleChange, addLandTo,checkUserVerified, currentAccount,checkUserVerification} = useContext(LandRegistrationContext);

    const handleSubmit = (e) => {
        const {landId,area,city,pradesh,propertyId,document}= formData;
        e.preventDefault();
        addLandTo();
    }

    useEffect(()=>{
        console.log('INISDE USE EFFECT'+currentAccount);
        // checkUserVerified(currentAccount);
        checkUserVerification();
    },[])

    return (
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