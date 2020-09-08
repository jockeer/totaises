import React from 'react';
const Error = ({mensajeError,tipo}) => {
    return ( 
        <div className={tipo} role="alert">
            {mensajeError}
        </div>
     );
}
 
export default Error;