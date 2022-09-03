import React from 'react';
import './index.css';
import {TbTruck, TbPackage, TbTruckDelivery, TbBox} from 'react-icons/tb';
import LogoGojek from '../../../../asset/gjk.png'
const ContentTrack = () => {
    
    return (
        <>
            <div className='ctn-cont-trck'>
                <div className="chd-cont-trck">
                    <div className="mnu-trck">
                        <ul className="ctn-mnu-lst">
                            <li className="mnu-lst-trck"><span className="mnu-txt-excp-trck">On Going</span></li>
                            <li className="mnu-lst-trck"><span className="mnu-txt-excp-trck">Picked Up</span></li>
                            <li className="mnu-lst-trck"><span className="mnu-txt-excp-trck">On transit</span></li>
                            <li className="mnu-lst-trck"><span className="mnu-txt-excp-trck">Delivered</span></li>
                        </ul>
                    </div>
                    <div className="ctn-lst-trck-ord">
                        <div className="lst-o-trck-ord">
                            <div className="lst-o-trck-ord-inf">
                                <div className="lst-o-trck-ord-id">
                                    <span className="lst-o-txt-id">Order ID: 1294812938DA</span>
                                </div>
                                <div className="lst-o-txt-dte">Order Time: 31 Agustus 2022 10:30:33 +7 Estimated Arrived:03 September 2022</div>
                                <button className="btn btn-upc">UpComing</button>
                            </div>
                        </div>
                        <div className="lst-t-trck-ord">
                            <div className="lst-t-trck-ord-sts">
                                <div className="lst-t-trck-sts-icn">
                                    <TbPackage className="icn-sts"/>
                                    <TbTruck className="icn-sts"/>
                                    <TbTruckDelivery className="icn-sts"/>
                                    <TbBox className="icn-sts"/>
                                </div>
                                <span className="lst-t-trck-vd crs-pntr">View Details</span>
                            </div>
                            <div className="lst-t-trck-ord-pngrm">
                                <span>Aria Wickasono</span>
                                <span>From: Jl. H Syahrin No 26. Gandaria Utara Kebayoran Baru Jaksel</span>
                                <div className="lst-t-trck-imp">
                                    <span>Barang Pecah Belah</span>
                                    <span>Qty: 1</span>
                                </div>
                            </div>
                            <div className="lst-t-trck-ord-pnrm">
                                <span>Aria Simelekete</span>
                                <span>To: Jl. H Syahrin No 26. Gandaria Utara Kebayoran Baru Jaksel</span>
                                <div className="lst-t-trck-jsa">
                                    <img src={LogoGojek} alt="logo gojek" className="lgo-gjk crs-pntr"/>
                                    <span className="crs-pntr">Cancel</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ctn-lst-trck-ord">
                        <div className="lst-o-trck-ord">
                            <div className="lst-o-trck-ord-inf">
                                <div className="lst-o-trck-ord-id">
                                    <span className="lst-o-txt-id">Order ID: 1294812938DA</span>
                                </div>
                                <div className="lst-o-txt-dte">Order Time: 31 Agustus 2022 10:30:33 +7 Estimated Arrived:03 September 2022</div>
                                <button className="btn btn-dlv">Delivered</button>
                            </div>
                        </div>
                        <div className="lst-t-trck-ord">
                            <div className="lst-t-trck-ord-sts">
                                <div className="lst-t-trck-sts-icn">
                                    <TbPackage className="icn-sts"/>
                                    <TbTruck className="icn-sts"/>
                                    <TbTruckDelivery className="icn-sts"/>
                                    <TbBox className="icn-sts"/>
                                </div>
                                <span className="lst-t-trck-vd crs-pntr">View Details</span>
                            </div>
                            <div className="lst-t-trck-ord-pngrm">
                                <span>Aria Wickasono</span>
                                <span>From: Jl. H Syahrin No 26. Gandaria Utara Kebayoran Baru Jaksel</span>
                                <div className="lst-t-trck-imp">
                                    <span>Barang Pecah Belah</span>
                                    <span>Qty: 1</span>
                                </div>
                            </div>
                            <div className="lst-t-trck-ord-pnrm">
                                <span>Aria Simelekete</span>
                                <span>To: Jl. H Syahrin No 26. Gandaria Utara Kebayoran Baru Jaksel</span>
                                <div className="lst-t-trck-jsa">
                                    <img src={LogoGojek} alt="logo gojek" className="lgo-gjk crs-pntr"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ctn-lst-trck-ord">
                        <div className="lst-o-trck-ord">
                            <div className="lst-o-trck-ord-inf">
                                <div className="lst-o-trck-ord-id">
                                    <span className="lst-o-txt-id">Order ID: 1294812938DA</span>
                                </div>
                                <div className="lst-o-txt-dte">Order Time: 31 Agustus 2022 10:30:33 +7 Estimated Arrived:03 September 2022</div>
                                <button className="btn btn-dly">Delayed</button>
                            </div>
                        </div>
                        <div className="lst-t-trck-ord">
                            <div className="lst-t-trck-ord-sts">
                                <div className="lst-t-trck-sts-icn">
                                    <TbPackage className="icn-sts"/>
                                    <TbTruck className="icn-sts"/>
                                    <TbTruckDelivery className="icn-sts"/>
                                    <TbBox className="icn-sts"/>
                                </div>
                                <span className="lst-t-trck-vd crs-pntr">View Details</span>
                            </div>
                            <div className="lst-t-trck-ord-pngrm">
                                <span>Aria Wickasono</span>
                                <span>From: Jl. H Syahrin No 26. Gandaria Utara Kebayoran Baru Jaksel</span>
                                <div className="lst-t-trck-imp">
                                    <span>Barang Pecah Belah</span>
                                    <span>Qty: 1</span>
                                </div>
                            </div>
                            <div className="lst-t-trck-ord-pnrm">
                                <span>Aria Simelekete</span>
                                <span>To: Jl. H Syahrin No 26. Gandaria Utara Kebayoran Baru Jaksel</span>
                                <div className="lst-t-trck-jsa">
                                    <img src={LogoGojek} alt="logo gojek" className="lgo-gjk crs-pntr"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentTrack