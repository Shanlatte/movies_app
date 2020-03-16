import React, {Component} from 'react';
import { ButtonBackToHome } from '../components/ButtonBackToHome';

const API_KEY = '4287ad07'
export class Detail extends Component {
    state = { movie : {} }

    _handleDetail = (id) => {

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(response => {
                this.setState({movie : response})
                console.log(this.state.movie)
            })
    }

    componentDidMount () {
        console.log(this.props.match.params)
        this._handleDetail(this.props.match.params.id)
    }

    _goBack(){
        window.history.back()
    }
    
    render () {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
        return (
            // <div>
            //     <ButtonBackToHome/>
            //     <h1>{Title}</h1>
            //     <img src={Poster} alt={Title}/>
            //     <h3>{Actors}</h3>
            //     <span>{Metascore}</span>
            //     <p>{Plot}</p>
            // </div>
            <div>
                <ButtonBackToHome style={{float:"left"}}/>
                <div className="card-content is-centered card-shadow" >
                
                <div className="media">
                <div className="media-left">
                    <figure className="image is-480x480">
                    <img src={Poster} alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="media-content">
                    <p className="title is-4">{Title}</p>
                    <p className="subtitle is-6">{Actors}</p>
                    <br/>
                    <p><strong>Score: </strong>{Metascore}</p>
                    <br/>
                    <br/>
                    <p><strong>Description:</strong></p>
                    <p className="subtitle is-6">{Plot}</p>
                </div>
                </div>
            </div>
            </div>
            
        )
    }
}