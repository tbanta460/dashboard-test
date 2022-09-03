import React, {useState} from 'react';
import './index.css';
import { useLocation } from 'react-router-dom';
import SiderMenu from '../../../datas/dataSidebar';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const [navsub, setNavSub] = useState({
        dashboard:false,
        order:false,
        statistic:false,
        products: false,
        stock:false,
        offer:false
    });
 
    const location = useLocation()
    const handleClickEvent = (e, data) => {
        let showHide;
        let targetNavSub = e.currentTarget.id.toString();
        
        navsub[e.currentTarget.id] ? showHide = false : showHide = true
        e.currentTarget.id !== null && setNavSub(prev => {
            return {
                ...prev,
                [targetNavSub]: showHide
            } 
        })
    }
    return(
        <>
            <div className="ctn-sdbr">
                <div className="sdbr-logo w-max mx-auto mt-5">
                    <h1>eProduct</h1>
                </div>
                <div className="sdbr-menu ">
                    <ul className="sdbr-menu-nav" >
                    {
                        SiderMenu.map(data => {
                            return(
                                <li key={data.id} onClick={(e) => handleClickEvent(e, data)} id={data.id}className={`sdbr-menu-nav-item list-none ${location.pathname === data.path ? "act-sdbr" : ""}`}>
                                    <b className={`${location.pathname === data.path ? "" : "hide"}`}></b>
                                    <b className={`${location.pathname === data.path ? "" : "hide"}`}></b>
                                    <Link to={data.path}>
                                    <div className="main-nav fle-ref">
                                        <div className="icon-nav ">
                                            {data.icon}
                                        </div>
                                        <div>
                                            <span className="txt-nav ">{data.name}<span className={` ${data.subMen.length === 0 ? "hidden" : ""} `}></span></span>
                                        </div>
                                        <div className={`${location.pathname === data.path ? "show" : "hide"}`}></div>
                                    </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
                <div className="qck-lnk">
                    <div className="qck-items">
                        <span>Feedback</span>
                        <span>AboutMe</span>
                        <span>ContactMe</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sidebar