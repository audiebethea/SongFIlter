import React from 'react';

export default class SongCard extends React.Component{
  

    render(){
        return(
            <div>
                <p>name: {this.props.song.name}</p>
                <p>artist: {this.props.song.artist}</p>
                <p>album: {this.props.song.album}</p>
            </div>
        )
    }
}