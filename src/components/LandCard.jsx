const LandCard = ({landId,area,city,pradesh,propertyId,document,isVerified}) => {
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
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>{landId}</th>
							<th>{parseInt(area)}</th>
							<th>{city}</th>
							<th>{pradesh}</th>
							<th>{parseInt(propertyId)}</th>
							<th>{document}</th>
                            <th>{isVerified}</th>
						</tr>
					</tbody>
            	</table>
			</div>
		</div>
    )

}
export default LandCard;