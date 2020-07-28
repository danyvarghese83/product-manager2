import React from 'react';
import axios from 'axios';

export default props => {
    return(
        <div>
            {props.product.map((product, index)=>{
                return <a key={index}>{product.title},{product.description}</a>
                
                
            })}
        </div>
    )
}