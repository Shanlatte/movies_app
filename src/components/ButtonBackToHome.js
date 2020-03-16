import React from 'react';
import {Link} from 'react-router-dom';

export function ButtonBackToHome () {
    return (
        <Link
            className='button is-info'
            to='/'
            >
                Volver a la portada
        </Link>
    )
        
    
}