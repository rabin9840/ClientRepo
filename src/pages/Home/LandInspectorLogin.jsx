import React, { useContext } from 'react'
import { LandRegistrationContext } from '../../context/LandRegistrationContext';
import { Navigate, redirect } from 'react-router-dom';
import { Button } from "@material-tailwind/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from '../Dashboard/LIPDashboard/LandRegisterIndex'
import './styles/index.css'
import { Link } from 'react-router-dom';
import LandRegisterIndex from '../Dashboard/LIPDashboard/LandRegisterIndex';



export default function LandInspectorLogin() {
	const {connectWallet, isAdmin,currentAccount, checkAdmin} = useContext(LandRegistrationContext);
	
	// const isAdmin= checkAdmin();
	// console.log("inside Admin login page:"+ isAdmin);
	<>
    {/* <ul>
    <li><Link to="/admin">Admin</Link></li>
    </ul> */}

    {/* <Routes>

      <Route path="/admin" element={<Index />}/>
    </Routes> */}



    </>
	
    return (
	    <>



	        <div className="flex items-center justify-center h-screen w-full">
	        {/* {!currentAccount && (
	            <button className="app-button_login" onClick={connectWallet}>
	              Login
	            </button>
	        ) } */}
	        {!currentAccount && (
	            <Button size="lg" color="amber" className="bg-amber-400 hover:bg-amber-500 text-gray-800 font-bold py-4 px-4 rounded flex items-center space-x-4 justify-center" onClick={connectWallet}>
					{/* <img src="/src/metamask.svg" alt="metamask" className="h-6 w-6" /> */}
	            	Connect with Metamask Wallet
	            </Button>
	        )}
	
	        {(currentAccount) && (
				<div>
	            {/* <Button size="lg" color="blue" className="flex items-center gap-3 app-button_login" onClick={checkAdmin}>
	            	<img src="/src/checkmark.svg" alt="checkmark" className="h-6 w-6" />
					Check if admin
	            </Button> */}

      <Button
        className="bg-green-400 hover:bg-green-600 text-gray-800 font-bold py-4 px-4 rounded flex items-center space-x-4 justify-center"
        onClick={checkAdmin}
      >
        <img
          src="/src/checkmark.svg"
          alt="checkmark"
          className="h-6 w-6 rounded-full bg-gray-700"
        />
        <span>Check if admin</span>
      </Button>
    </div>


				
				
)}
{/* 
			{(currentAccount) && (
				<div>
					<Button onClick={checkAdmin}>Click Admin</Button>
				</div>
	        )} */}
	
	        {isAdmin && (
				<div>
	           <Navigate to='/landInspectorDash'> </Navigate>
				</div>

	        )}  

		{/* {(currentAccount) && (
            <button className="app-button_login" onClick={checkAdmin}>
              check if admin
            </button>
        )}

        {isAdmin && (
           <Navigate to='/admin'></Navigate>
        )}   */}
			

		
	    </div>
	    </>
	)
}	