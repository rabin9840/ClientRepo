import React, {useContext} from "react";
import { LandRegistrationContext } from '../context/LandRegistrationContext'; 
import "./styles/index.css"

const AllLandCard=({landId,area,city,pradesh,propertyId,document,isVerified,landOwnerAddress}) => {
	const {requestThisLand}=  useContext(LandRegistrationContext);
	
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Land Request</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th className="hidden md:table-cell">Land ID</th>
							<th className="hidden md:table-cell">Area</th>
							<th className="hidden md:table-cell">City</th>
							<th className="hidden md:table-cell">Pradesh</th>
							<th className="hidden md:table-cell">Property ID</th>
                            {/* className="hidden md:table-cell" <th>Document</th> */}
							<th className="hidden md:table-cell">Land Status</th>
							<th className="hidden md:table-cell">Land Owner Acc.</th>
							<th className="hidden md:table-cell">Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="hidden md:table-cell">{landId}</td>
							<td className="hidden md:table-cell">{parseInt(area)}</td>
							<td className="hidden md:table-cell">{city}</td>
							<td className="hidden md:table-cell">{pradesh}</td>
							<td className="hidden md:table-cell">{parseInt(propertyId)}</td>
                            {/* className="hidden md:table-cell" <th>{document}</th> */}
							<td className="hidden md:table-cell">{isVerified}</td>
                            <td className="hidden md:table-cell">{landOwnerAddress}</td>
							<td className="hidden md:table-cell"><button className="button-styles" onClick={() => {
									requestThisLand(landId,landOwnerAddress)}}
								>
									Request Land
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
                        {/* <tr className="md:hidden">
                            <td>Document</td>
                            <td>{document}</td>
                        </tr> */}
                        <tr className="md:hidden">
                            <td>Land Status</td>
                            <td>{isVerified}</td>
                        </tr>

						<tr className="md:hidden">
                            <td>Land Owner Account</td>
                            <td>{landOwnerAddress}</td>
                        </tr>
						<tr className="md:hidden">
                            <td>Action</td>
                            <td><button className="button-styles" onClick={() => {
									requestThisLand(landId,landOwnerAddress)}}
								>
									Request Land
								</button></td>
                        </tr>
					</tbody>
            	</table>
			</div>
		</div>
	)
	
}
export default AllLandCard;