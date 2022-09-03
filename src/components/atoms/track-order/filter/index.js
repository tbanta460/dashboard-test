import React from 'react';
import './index.css';

const Filter = () => {
    return(
        <>
            <div className="ctn-ftl">
                <div className="chd-ftl">
                    <div className="wrp-ftl">
                        <h4 className="ttl-trck-ftl">Tracking Order</h4>
                        <input className="srch-trck-ftl" placeholder="Search"/>
                        <div className="wrp-opt-ftl">
                            <select name="courier" id="courier">
                                <option value="couriera">CourierA</option>
                                <option value="courierb">CourierB</option>
                                <option value="courierc">CourierC</option>
                                <option value="courierd">CourierD</option>
                            </select>
                        </div>
                        <div className="wrp-date-ftl">
                            <input type="date" id="date" name="date" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter