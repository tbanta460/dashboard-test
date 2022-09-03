import React, {useEffect} from 'react';

const Home = () => {
    useEffect(() => {
        window.location.assign('/track-order')
    }, [])
    return(<></>)
}
export default Home