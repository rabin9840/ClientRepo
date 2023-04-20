import React, {useEffect} from 'react'
import Index from './pages/Home/Index'
import { ethers } from "ethers";
import { contractABI, contractAddress } from "./utils/constants";
// import Index from './pages/Dashboard/LIPDashboard/Index';

export default function App() {
  const { ethereum } = window;
	const provider = new ethers.providers.Web3Provider(ethereum);
	const signer = provider.getSigner();  
	const landRegistrationContract = new ethers.Contract(contractAddress, contractABI, signer);
	
	useEffect(() => {
	  landRegistrationContract.on('Registration', async (userAddress) => {
	    console.log("INSIDE EVENT" + userAddress);
	    const userInfo = await landRegistrationContract.getUserDetails(userAddress);
	    console.log(userInfo);
	
	    // const isVerified= await landRegistrationContract.verifyUser(userAddress);
	    console.log("verification success");
	  })
	}, []);

  return (
    <div>
        <Index />
    </div>

	// <>
    // <ul>
    // <li><Link to="/admin">Admin</Link></li>

    // </ul>

    // <Routes>
    //   <Route path="/admin" element={<Index />}/>

    // </Routes>
    // </>
  )
}