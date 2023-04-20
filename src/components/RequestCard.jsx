import React, {useContext} from "react";
import { LandRegistrationContext } from '../context/LandRegistrationContext'; 

const RequestCard = ({requestId,sellerAddress,buyerAddress,landId,requestStatus}) => {
    const {approveRequest} = useContext(LandRegistrationContext);
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Land Verification</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>Request ID</th>
							<th>Land ID</th>
							<th>Buyer Address</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>{requestId}</th>
							<th>{landId}</th>
							<th>{buyerAddress}</th>
							<th><button onClick={() => {
									approveRequest(requestId)}}
								>
									Approve
								</button>
							</th>
						</tr>
					</tbody>
            	</table>
			</div>
		</div>
    )

}
export default RequestCard;