import React, {useContext} from "react";
import { LandRegistrationContext } from '../context/LandRegistrationContext'; 

const VerifiedRequestCard = ({requestId,sellerAddress,buyerAddress,landId,requestStatus,isTransfered}) => {
    const {transferLand}= useContext(LandRegistrationContext);
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Ownership Transfer</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>Request ID</th>
							<th>Land ID</th>
							<th>Buyer Address</th>
							<th>Request Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>{requestId}</th>
							<th>{landId}</th>
							<th>{buyerAddress}</th>
							<th>{requestStatus.toSpring()}</th>
							<th>{isTransfered.toString()}</th>
							<th><button 
									onClick={() => { 
										transferLand(landId, buyerAddress)
									}}
								>
									Transfer
								</button>
							</th>
						</tr>
					</tbody>
            	</table>
			</div>
		</div>
    )

}

export default VerifiedRequestCard;