import React from 'react'

import Sidebar from './Sidebar'
import Barra from './Barra';

const Home = () => {
    return ( 
        <div className="container-home">
            <Sidebar/>
            <div className="container-main">
                <Barra titulo=''/>
                
            </div>
        </div>
     );
}
 
export default Home;