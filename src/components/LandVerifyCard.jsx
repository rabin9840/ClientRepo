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
							<th className="hidden md:table-cell">Land ID</th>
							<th className="hidden md:table-cell">Area</th>
							<th className="hidden md:table-cell">City</th>
							<th className="hidden md:table-cell">Pradesh</th>
							<th className="hidden md:table-cell">Property ID</th>
							<th className="hidden md:table-cell">Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="hidden md:table-cell">{landId}</td>
							<td className="hidden md:table-cell">{area}</td>
							<td className="hidden md:table-cell">{city}</td>
							<td className="hidden md:table-cell">{pradesh}</td>
							<td className="hidden md:table-cell">{parseInt(propertyId)}</td>
							<td className="hidden md:table-cell">
								<button onClick={() => {
									verifyTheLand(landId)}}
								>
									Verify Land
								</button>
							</td>
						</tr>

						<tr className="md:hidden">
                            <td>Land ID</td>
                            <td>{landId}</td>
                        </tr>
                        <tr className="md:hidden">
                            <td>Area</td>
                            <td>{parseInt(area)}</td>
                        </tr>
                        <tr className="md:hidden">
                            <td>City</td>
                            <td>{city}</td>
                        </tr>
                        <tr className="md:hidden">
                            <td>Pradesh</td>
                            <td>{pradesh}</td>
                        </tr>
                        <tr className="md:hidden">
                            <td>Property ID</td>
							<td>{parseInt(propertyId)}</td>
						</tr>
						<tr className="md:hidden">
                            <td>Action</td>
							<td>
								<button onClick={() => {
									verifyTheLand(landId)}}
								>
									Verify Land
								</button></td>
						</tr>
					</tbody>
            	</table>
			</div>
		</div>
    )

}

export default LandVerifyCard;