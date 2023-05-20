import React, { useContext, useEffect } from 'react'
import {LandRegistrationContext} from '../../../context/LandRegistrationContext'

export default function UDashboard() {
	// const {getUserInfo, userData}=  useContext(LandRegistrationContext);
	// const handleUserInfo = (e) => {
	// 	e.preventDefault();
	// 	getUserInfo();
	// }

	 const {getUserInfo, userData,isUserVerified,checkUserVerification}=  useContext(LandRegistrationContext);
	//  to load the address when loading the page
	// remove react strict mode in main jsx or else data would be shown two times
	useEffect(()=>{
		async function getUserInfoFrom(){
			await checkUserVerification();
			await getUserInfo();

		}
		getUserInfoFrom();
	    
	}, []);
  
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			{/* <button onClick={handleUserInfo}>View User Details</button> */}
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th className="hidden md:table-cell">Name</th>
							<th className="hidden md:table-cell">City</th>
							<th className="hidden md:table-cell">Citizenship No.</th>
							<th className="hidden md:table-cell">Email</th>
							<th className="hidden md:table-cell">Verification Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th className="hidden md:table-cell">{userData.name}</th>
							<th className="hidden md:table-cell">{userData.city}</th>
							<th className="hidden md:table-cell">{userData.citizenShipNumber}</th>
							<th className="hidden md:table-cell">{userData.email}</th>
							{
								isUserVerified && (
									<th className="hidden md:table-cell">Verification Done</th>

								)
							}

{
								!isUserVerified && (
									<th className="hidden md:table-cell">Verification Not Done</th>

								)
							}
							
						</tr>

						<tr className="md:hidden">
                            <td>Name</td>
                            <td>{userData.name}</td>
                        </tr>
                        <tr className="md:hidden">
                            <td>City</td>
                            <td>{userData.city}</td>
                        </tr>
                        <tr className="md:hidden">
                            <td>CitizenShip No.</td>
                            <td>{userData.citizenShipNumber}</td>
						</tr>
						<tr className="md:hidden">
                            <td>Email</td>
                            <td>{userData.email}</td>
                        </tr>
                        <tr className="md:hidden">
                            <td>Verification Status</td>
                            <td>{
								isUserVerified && (
									<td>Verification Done</td>

								)
							}

{
								!isUserVerified && (
									<td>Verification Not Done</td>

								)
								}
							</td>
                        </tr>
                      
					</tbody>
            	</table>
			</div>
		</div>
  	)


}