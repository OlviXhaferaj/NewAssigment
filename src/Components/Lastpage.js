import React from 'react'
import {useParams} from 'react-router-dom';
import style from '../App.css'
const Lastpage = (props) => {
    const {tword, color,backgroundColor}=useParams();
    const stylee={
        color: color,
        backgroundColor: backgroundColor
    }

    return (
        <div className={'divcomp'} style={stylee}>
            
            <h1>{tword}</h1>
        </div>
    )
}

export default Lastpage;