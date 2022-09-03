import React from 'react';
import './index.css';

const FilterAccRec = () => {
    return(
        <>
            <div className="ctn-flt-ar">
                <div className="chd-flt-ar">
                    <h4 className="ttl-trck-ftl">Tracking Order</h4>
                    <div className="wrp-ftl">
                        <input className="srch-trck-ftl" placeholder="Search"/>
                        <div className="wrp-opt-ftl">
                            <select name="billing-cyle" id="billing-cyle">
                                <option value="billing-cylea">Billing Cycle A</option>
                                <option value="billing-cyleb">Billing Cycle B</option>
                                <option value="billing-cylec">Billing Cycle C</option>
                                <option value="billing-cyled">Billing Cycle D</option>
                            </select>
                            <select name="status" id="status">
                                <option value="statusa">StatusA</option>
                                <option value="statusb">StatusB</option>
                                <option value="statusc">StatusC</option>
                                <option value="statusd">StatusD</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterAccRec