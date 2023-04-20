import { HiOutlineViewGrid, HiBadgeCheck } from 'react-icons/hi'
import { BsFillLayersFill } from 'react-icons/bs'
import { BiTransferAlt } from 'react-icons/bi'

export const LIPDASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'verifyland',
        label: 'Verify Land',
        path: '/verifyland',
        icon: <BsFillLayersFill />
    },
    {
        key: 'transferownership',
        label: 'Transfer Ownership',
        path: '/transferownership',
        icon: <BiTransferAlt />
    }
]