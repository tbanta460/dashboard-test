import React, {useState} from 'react';
import {MdNotificationsActive, MdSearch} from 'react-icons/md';
import Elng from '../../../asset/Elang.jpg'
import './index.css'
const Header = ({isTtlPage}) => {
    const [showBox, setShowBox] = useState({
        profile:false,
        notif:false
    })
    const [showHideInpt, setShowHideInpt] = useState(false)
    const handleClickShowBoxs = (e) => {
        let str;
        const getIdFromEls = e.currentTarget.id
        if(getIdFromEls === "profile"){
            str = !showBox.profile
        }else if(getIdFromEls === "notif"){
            str = !showBox.notif
        }
        setShowBox(() => {
            return{
                [getIdFromEls]: str
            }
        })
    }
    return(
        <>
            <div className="ctn-hd">
                <div className="chd-hd">
                    <div className="hd-prt-one">
                        <h4 className="prt-one-txt">eProduct</h4>
                        <span className="prt-one-txt-excp">Kamis, 01 September 2022</span>
                    </div>
                    <div className="prt-two">
                        <div className="prt-two-chd">
                            <div className="prt-two-icn-ntf" id="notif" onClick={handleClickShowBoxs}>
                                <MdNotificationsActive className="part-two-icn-ntf-img"/>
                            </div>
                            <div className={`prt-two-asst-ntf ${showBox.notif ? "show-box" : "hide-box"}`}>
                                <span className="prt-two-txt-ntf">Notifikasi Baru</span>
                                <ul className="list-none">
                                    <li className="prt-two-list-ntf">
                                        <h5 className="prt-two-list-ntf-txt-ttl">Konfirmasi Pesanan Menunggu Persetujuan</h5>
                                        <p className="prt-two-list-ntf-par">Pesanan <span clasName="inline-block fontbold">0229184</span> sedang menunggu persetujuan untuk diproses.</p>
                                    </li>
                                    <li className="prt-two-list-ntf">
                                        <h5 className="prt-two-list-ntf-txt-ttl ">Konfirmasi Pesanan Menunggu Persetujuan</h5>
                                        <p className="prt-two-list-ntf-par">Pesanan <span clasName="inline-block fontbold">0229184</span> sedang menunggu persetujuan untuk diproses.</p>
                                    </li>
                                    <li className="prt-two-list-ntf">
                                        <h5 className="prt-two-list-ntf-txt-ttl">Konfirmasi Pesanan Menunggu Persetujuan</h5>
                                        <p className="prt-two-list-ntf-par">Pesanan <span clasName="inline-block fontbold">0229184</span> sedang menunggu persetujuan untuk diproses.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="prt-two-icn-srch" id="search" onClick={handleClickShowBoxs}>
                            <MdSearch className="part-two-icn-ntf-img" onClick={() => setShowHideInpt(!showHideInpt)}/>
                            <input type="text" placeholder="Cari" className={`prt-two-prf-srch ${showHideInpt ? "show-inpt" : "hide-inpt"}`} />
                        </div>
                        <div className="prt-two-prf">
                            <div className="prt-two-prf-wrp-img" onClick={handleClickShowBoxs} id="profile">
                                <img src={Elng} alt="profile icon" className="prt-two-prf-img"/>
                            </div>
                             <div className={`prt-two-asst-prf ${showBox.profile ? "show-box" : "hide-box"}`}>
                                <div className="prt-two-prf-dash">
                                    <div className="prt-two-prf-my-img-wpr">
                                        <img src={Elng} alt="foto profile dashboard" className="prt-two-prf-my-img"/>
                                    </div>
                                    <div className="prt-two-prf-my-nme">
                                        <h4>Mutiara Tia</h4>
                                        <span className="prt-two-prf-eml">mutiara@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header