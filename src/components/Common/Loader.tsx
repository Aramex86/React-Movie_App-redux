import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
const Loader = () => {
    return (
        <div>
           <CircularProgress className="progress" size={54} color='inherit'/> 
        </div>
    )
}
export default Loader
