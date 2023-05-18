import React, { useContext } from "react";
import { Navigate } from 'react-router-dom';
import {LandRegistrationContext} from '../../context/LandRegistrationContext';
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";


const User = () => {
    const {connectWallet, isAdmin,currentAccount,setIsAdmin} = useContext(LandRegistrationContext);
    const {addUserTo, userData, handleUserChange,dataRegistered,checkUser,checkAdmin,checkAdminButton,isUser} = useContext(LandRegistrationContext);
    // const [checkAdminButton,setCheckAdminButton]=useState(false);

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
            console.log(userData);
      }


      // NEED AND EXTRA PAGE FOR LOGIN BY USER WHEN VERIFIED

      // LOAD THIS PAGE WHEN THE USER IS NOT ADMIN AND NOT REGISTERED IN THE BLOCKCHAIN
    // if(!checkAdmin()){

    return (
        <>
        {/* Additional change */}
        	{!currentAccount && (
	            <Button size="lg" color="amber" className="flex items-center gap-3 m-15" onClick={connectWallet}>
					{/* <img src="/src/metamask.svg" alt="metamask" className="h-6 w-6" /> */}
	            	Connect with Metamask Wallet
	            </Button>
	        )}

        { !isAdmin && currentAccount &&
         (           <Card color="transparent" shadow={false} className="content-center form-style">
                    <Typography variant="h4" color="blue-gray" background-color="black" className="heading-top">
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
                            {/* <Input
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
                            /> */}
                        </div>
                        <Button className="mt-6" onClick={checkAdmin} fullWidth>
                            Check Admin
                        </Button>
                        {checkAdminButton && !isAdmin &&(
                        <Button className="mt-6" onClick={handleUserSubmit} fullWidth>
                            Register
                        </Button>
                        )
                        }
        
                    {dataRegistered && (
                       <Navigate to='/userDash'></Navigate>
                    )}
                    </form>

                    <div className="login-button">
                        
                    <Button className="mt-6" onClick={checkUser} fullWidth>
                            Login
                    </Button>
                    {
                        isUser && (
                            <Navigate to='/userDash'></Navigate>
                        )

                    }

                    </div>


                </Card>
         )

        }
       

        </>
    );
    // }

    // IF USER REGISTERED AND NOT ADMIN THEN DIRECTLY TO USERDASH BOARD
    // if(!checkAdmin() && checkUser()){
    //     <Navigate to='/userDash'></Navigate>
    // }
}
export default User;