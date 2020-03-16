import React, { useState} from 'react';
import { MovieList } from '../components/MovieList';
import { Title } from '../components/Title';
import { SearchForm } from '../components/SearchForm';

export function Home() {
    const [ resultados , setResults ] = useState([]);
    const [ usedSearch , setSearch ] = useState(false);
  
    const _handleResults = (resultados, totalResults) => {
        setResults( {resultados} );
        setSearch( true );
    }

    const _renderResults = () =>{
        return (
        resultados.resultados.length === 0
            ? <p>No encontramos nada</p>
            : <MovieList movie={resultados}/>
        )
    }
    
    return (
        <div>
            <Title>Movies App</Title>
                <div className="SearchForm-wrapper">
                    <SearchForm onResults={_handleResults}/>
                </div>
                <br/>
                { usedSearch === false 
                    ? <p>Inserte la pelicula que desea buscar </p>
                    : _renderResults()}
        </div>
    )
    }