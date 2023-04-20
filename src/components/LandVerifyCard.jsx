import React, {useContext} from "react";
import { LandRegistrationContext } from '../context/LandRegistrationContext'; 

const LandVerifyCard = ({landId, area, city, pradesh, propertyId, document, isVerified}) => {
    const {verifyTheLand,checkLandVerified} = useContext(LandRegistrationContext);
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Land Verification</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>Land ID</th>
							<th>Area</th>
							<th>City</th>
							<th>Pradesh</th>
							<th>Property ID</th>
                            <th>Document</th>
							<th>Land Status</th>
							<th>Action</th>
							<th>Confirmation Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>{landId}</th>
							<th>{area}</th>
							<th>{city}</th>
							<th>{pradesh}</th>
							<th>{parseInt(propertyId)}</th>
							<th>{isVerified}</th>
							<th><button onClick={() => {
									verifyTheLand(userAccount,isVerified)}}
								>
									Verify Land
								</button>
							</th>
							<th><button onClick={() => {
									checkLandVerified(userAccount)}}
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

export default LandVerifyCard;