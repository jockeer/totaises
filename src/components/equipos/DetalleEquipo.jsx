import React,{useState,useEffect} from 'react'

const DetalleEquipo = ({match}) => {
    return ( 
        <h1>desde Detalle {match.params.idequipo}</h1>
    );
}
 
export default DetalleEquipo;