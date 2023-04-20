import { HiOutlineViewGrid } from 'react-icons/hi'
import { MdRequestPage } from 'react-icons/md'
import { FaLandmark } from 'react-icons/fa'
import { BiLandscape } from 'react-icons/bi'
import { FcApprove } from 'react-icons/fc'

export const UserDASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'udashboard',
        label: 'UDashboard',
        path: '/',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'addland',
        label: 'Add Land',
        path: 'addland',
        icon: <FaLandmark />
    },
    {
        key: 'mylands',
        label: 'My Lands',
        path: 'mylands',
        icon: <BiLandscape />
    },
    {
        key: 'requestland',
        label: 'Request land',
        path: 'requestland',
        icon: <MdRequestPage />
    },
    {
        key: 'approve',
        label: 'Approve',
        path: 'Approve',
        icon: <FcApprove />
    }
]