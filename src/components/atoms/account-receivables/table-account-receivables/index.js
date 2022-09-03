import React from 'react';
import './index.css';
import DataAccountRec from '../../../../datas/dataTableAccountRcv';

const TableAccountReceivables = () => {
    const headerTable = ["No", "Billing Cycle", "Merchant Id", "Merchant Name", "Company Name", "Account Type", "Amount", "Tax", "Total Amount", "Status", "Action"]
  
    return(
        <>
            <div className="ctn-tbl-ar">
                <div className="chd-tbl-ar">
                    <table id="customers" className="w-full">
                        <tbody>
                            <tr>
                                {
                                    headerTable.map((data, i) => {
                                        return(<th key={i}>{data}</th>)
                                    })
                                }
                            </tr>
                            {
                                DataAccountRec.map(data => {
                                    return (
                                        <tr key={data.id} className="tbl-lst-ord">
                                            <td >{data.nomor}</td>
                                            <td >{data.billing}</td>
                                            <td >{data.merchantId}</td>
                                            <td >{data.merchantName}</td>
                                            <td >{data.companyName}</td>
                                            <td >{data.accountType}</td>
                                            <td >{data.ammount}</td>
                                            <td >{data.tax}</td>
                                            <td >{data.totalAmount}</td>
                                            <td >{data.status}</td>
                                            <td >{data.action}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default TableAccountReceivables