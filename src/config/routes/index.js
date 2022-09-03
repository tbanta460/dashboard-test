import React from 'react';
import { Routes, Route} from "react-router-dom";

// Element
import {TrackOrder, AccountReceivables, Home} from "../../pages";
// Component

const Routess = () => {
	return (
		<>
				<Routes>
					<Route path="/track-order" element={<TrackOrder />}/>	
					<Route path="/account-receivables" element={<AccountReceivables />} />
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Home />} />
				</Routes>
		</>
	)
}

export default Routess