import React, { useContext } from 'react'
import {LandRegistrationContext} from '../../../context/LandRegistrationContext'

export default function UDashboard() {
	const {getUserInfo, userData}=  useContext(LandRegistrationContext);
	const handleUserInfo = (e) => {
		e.preventDefault();
		getUserInfo();
	}
  
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<button onClick={handleUserInfo}>View User Details</button>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>Name</th>
							<th>City</th>
							<th>Citizenship No.</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>{userData.name}</th>
							<th>{userData.city}</th>
							<th>{userData.citizenShipNumber}</th>
							<th>{userData.email}</th>
						</tr>
					</tbody>
            	</table>
			</div>
		</div>
  	)
}