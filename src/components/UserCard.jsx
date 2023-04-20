import React, {useContext} from "react";
import { LandRegistrationContext } from '../context/LandRegistrationContext'; 

const UserCard = ({name,age,city,citizenShipNumber,email,userAccount,isVerified}) => {
    const {verifyTheUser,checkUserVerified}=  useContext(LandRegistrationContext);
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">User Verification</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>Name</th>
							<th>City</th>
							<th>Citizenship No.</th>
							<th>Email</th>
							<th>Address</th>
							<th>Action</th>
							<th>Confirmation Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>{name}</th>
							<th>{city}</th>
							<th>{citizenShipNumber}</th>
							<th>{email}</th>
							<th>{address}</th>
							<th><button onClick={() => {
									verifyTheUser(userAccount,isVerified)}}
								>
									Verify User
								</button>
							</th>
							<th><button onClick={() => {
									checkUserVerified(userAccount)}}
								>
									Check
								</button>
							</th>
						</tr>
					</tbody>
            	</table>
			</div>
		</div>
    )

}
export default UserCard;