import React, {useContext} from "react";
import { LandRegistrationContext } from '../context/LandRegistrationContext'; 

const UserCard = ({name,age,city,citizenShipNumber,email,userAccount,isVerified}) => {
    const {verifyTheUser,checkUserVerified}=  useContext(LandRegistrationContext);
    return (
<div class="flex flex-col md:flex-row">

<div class="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 mb-4 md:mb-0 md:mr-4">
  <strong class="text-gray-700 font-medium">User Verification</strong>
  <div class="border-x border-gray-200 rounded-sm mt-3 w-full flex-column">
	<table class="w-full text-gray-700 flex-column">
	  <thead>
		<tr class="hidden md:table-row">
		  <th>Name</th>
		  <th>City</th>
		  <th>Citizenship No.</th>
		  <th>Email</th>
		  <th>Age</th>
		  <th>Action</th>
		  <th>Confirmation Status</th>
		</tr>
	  </thead>
	  <tbody>
		<tr class="table-row md:hidden">
		  <td class="font-bold">Name:</td>
		  <td>{name}</td>
		</tr>
		<tr class="table-row md:hidden">
		  <td class="font-bold">City:</td>
		  <td>{city}</td>
		</tr>
		<tr class="table-row md:hidden">
		  <td class="font-bold">Citizenship No.:</td>
		  <td>{citizenShipNumber}</td>
		</tr>
		<tr class="table-row md:hidden">
		  <td class="font-bold">Email:</td>
		  <td>{email}</td>
		</tr>
		<tr class="table-row md:hidden">
		  <td class="font-bold">Age:</td>
		  <td>{parseInt(age)}</td>
		</tr>
		<tr class="table-row md:hidden">
		  <td class="font-bold">Action:</td>
		  <td>
			<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
			  verifyTheUser(userAccount,isVerified)}}
			>
			  Verify User
			</button>
		  </td>
		</tr>
		<tr class="table-row md:hidden">
		  <td class="font-bold">Confirmation Status:</td>
		  <td>{isVerified ? 'True' : 'False'}</td>
		</tr>
		<tr class="hidden md:table-row">
		  <td>{name}</td>
		  <td>{city}</td>
		  <td>{citizenShipNumber}</td>
		  <td>{email}</td>
		  <td>{parseInt(age)}</td>
		  <td>
			<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
			  verifyTheUser(userAccount,isVerified)}}
			>
			  Verify User
			</button>
		  </td>
		  <td>{isVerified ? 'True' : 'False'}</td>
		</tr>
	  </tbody>
	</table>
  </div>
</div>

</div>



    )

}
export default UserCard;