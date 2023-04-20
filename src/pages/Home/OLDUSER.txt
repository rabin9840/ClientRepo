import React, { useContext } from "react";
import { Navigate } from 'react-router-dom';
// import LandRegistrationContext from '../../context/LandRegistrationContext';
import {LandRegistrationContext} from '../../context/LandRegistrationContext';
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useEffect } from "react";

const User = () => {
    const {connectWallet, isAdmin,currentAccount} = useContext(LandRegistrationContext);
    const {addUserTo, userData, handleUserChange,checkAdmin} = useContext(LandRegistrationContext);
    // const handleUserSubmit = (e) => {
    //     const {name, age, city, citizenShipNumber, email, document } = userData;
    //     e.preventDefault();
    //     console.log(userData);
    //     checkAdmin();
    //     if(checkAdmin){
    //         console.log("the person is admin");

    //     }
    //     else{
    //         addUserTo();
    //     }
       
    //   }
    const handleUserSubmit = (e) => {
        const {name, age, city, citizenShipNumber, email, document } = userData;
        e.preventDefault();
        console.log(userData);
            addUserTo();
      }


    // useEffect(()=>{
    //     checkAdmin();
    // },[]);

    return (
        <Card color="transparent" shadow={false} className="content-center">
            <Typography variant="h4" color="blue-gray">
                User Registration
            </Typography>
            
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                    <Input
                        type="text"
                        name="name"
                        label="Name"
                        onChange={handleUserChange}
                    />
                    <Input
                        type="number"
                        name="age"
                        label="Age"
                        onChange={handleUserChange}
                    />
                    <Input
                        type="text"
                        name="city"
                        label="City"
                        onChange={handleUserChange}
                    />
                    <Input
                        type="text"
                        name="citizenShipNumber"
                        label="Citizenship Number"
                        onChange={handleUserChange}
                    />
                    <Input
                        type="email"
                        name="email"
                        label="Email"
                        onChange={handleUserChange}
                    />
                    <Input
                        type="text"
                        name="panNum"
                        label="Pan Number"
                        onChange={handleUserChange}
                    />
                    <Input
                        type="text"
                        name="surveyNumber"
                        label="Survey Number"
                        onChange={handleUserChange}
                    />
                </div>
                
                <Button className="mt-6" onClick={handleUserSubmit} fullWidth>
                    Register
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    --Or--
                </Typography>
                {!currentAccount && (
	                <Button color="amber" className="flex items-center gap-3" onClick={connectWallet} fullWidth>
					    <img src="/src/metamask.svg" alt="metamask" className="h-6 w-6" />
	            	    Connect with Metamask
	                </Button>
	            )}
	
	        {(currentAccount) && (
	            <Button color="blue" className="flex items-center gap-3" onClick={checkAdmin} fullWidth>
	            	<img src="/src/checkmark.svg" alt="checkmark" className="h-6 w-6" />
					Check if admin
	            </Button>
	        )}
	
	        {/* {!isAdmin && (
	           <Navigate to='/userDash'></Navigate>
	        )} */}

            {!checkAdmin() && (
	           <Navigate to='/userDash'></Navigate>
	        )}
            </form>
        </Card>
    );
}
export default User;