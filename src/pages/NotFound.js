import React from 'react';
import { ButtonBackToHome } from '../components/ButtonBackToHome'; 

export function NotFound(){
    return (
        <div>
            <h1 className='title'>404!</h1>
            <p className='subtitle'> No existe la pagina...</p>
            <ButtonBackToHome/>
        </div>
    )
}