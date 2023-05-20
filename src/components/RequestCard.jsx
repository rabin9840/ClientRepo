import React, {useContext} from "react";
import { LandRegistrationContext } from '../context/LandRegistrationContext'; 
import "./styles/index.css"

const RequestCard = ({requestId,sellerAddress,buyerAddress,landId,requestStatus}) => {
	const { approveRequest } = useContext(LandRegistrationContext);
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Land Request</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th  className="hidden md:table-cell">Request ID</th>
							<th  className="hidden md:table-cell">Land ID</th>
							<th  className="hidden md:table-cell">Buyer Address</th>
							<th  className="hidden md:table-cell">Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td  className="hidden md:table-cell">{requestId}</td>
							<td  className="hidden md:table-cell">{parseInt(landId)}</td>
							<td  className="hidden md:table-cell">{buyerAddress}</td>
							<td className="hidden md:table-cell">
								<button className="button-styles" onClick={() => {
									approveRequest(requestId)}}
								>
									Approve
								</button>
							</td>
						</tr>

						<tr className="md:hidden">
                            <td>Request ID</td>
                            <td>{requestId}</td>
                        </tr>
                        <tr className="md:hidden">
                            <td>Land ID</td>
                            <td>{parseInt(landId)}</td>
                        </tr>
                        <tr className="md:hidden">
                            <td>Buyer Address</td>
							<td>{buyerAddress}</td>
						</tr>
						<tr className="md:hidden">
                            <td>Action</td>
							<td>
							<button className="button-styles" onClick={() => {
									approveRequest(requestId)}}
								>
									Approve
								</button>
							</td>
						</tr>
					</tbody>
            	</table>
			</div>
		</div>
    )

}
export default RequestCard;