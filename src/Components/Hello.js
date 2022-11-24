import React from 'react'
import { useParams } from 'react-router-dom'

const Hello = () => {
    const {word} = useParams();
    const stylee={
        display:'flex',
        justifyContent:'center'
    }
    return (
        <div style={stylee} className={'divcomp'}>
            {
                isNaN(word)?
                <h1 >the word is:{word}</h1>:
                <h1>the word is a number</h1>
            }
            {/* <h1>The word is :{word}</h1> */}
        </div>
    )
}

export default Hello;