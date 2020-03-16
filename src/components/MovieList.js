import React, { Component } from 'react';
import { Movie } from './Movie';

export class MovieList extends Component{

    render(){
        return (
            <div className="MovieList">
            {
                this.props.movie.resultados.map(movie => {
                    return(
                        <div 
                            key= {movie.imdbID} 
                            className="MovieList-item">
                            <Movie 
                                id={movie.imdbID}
                                title={movie.Title}
                                year={movie.Year}
                                photoUrl={movie.Poster}/>
                        </div>)
                })
            }
              </div>
            
        )
    }
}