import React from 'react'
import { useParams } from 'react-router-dom'
const Number = () => {
    const {num} = useParams();
    return (
        <div className={'divcomp'} >
            {
                isNaN(num)?
                <h1></h1>:
                <h1>The number is: {num}</h1>
            }
            
        </div>
    )
}

export default Number