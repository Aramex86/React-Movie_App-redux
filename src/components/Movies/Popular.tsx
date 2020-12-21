import React from 'react'
import Filters from '../Common/Filters';

const Popular = () => {
    return (<>
            <h1 className='heading'>Popular Movies</h1>
        <div className='popularwrap'>
            <Filters/>
            <div className='movielist'>Movies</div>
        </div>
   </> )
}

export default Popular
