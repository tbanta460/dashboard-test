import {MdTrackChanges} from 'react-icons/md';
import {RiUserReceived2Fill} from 'react-icons/ri'

const style = {width: "25px", height:"25px", fill:"white"};
const SiderMenu = [
    {
        name:'Track Order',
        icon: <MdTrackChanges style={style} className="icn-sdbr"/>,
        id: 'track-order',
        path: '/track-order',
        subMen:[]
    },
    {
        name:'Account Receivables',
        icon: <RiUserReceived2Fill style={style} className="icn-sdbr"/>,
        id: 'account-receivables',
        path: '/account-receivables',
        subMen:[]
    }
]

export default SiderMenu