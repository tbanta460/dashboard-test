import React from 'react';
import './index.css';
import { FilterAccRec, TableAccountReceivables } from '../../';
const MainAccountReceivables = () => {
    return(
        <>
            <div className="ctn-ar">
                <FilterAccRec />
                <TableAccountReceivables />
            </div>
        </>
    )
}

export default MainAccountReceivables