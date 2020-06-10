import React from 'react';
import SongCard from './songcard';

const songs = [
    {
        name: "Song Cry",
        artist: "Jay-Z",
        album: "The Blueprint"
    },
    {
        name: "Somebody To Love",
        artist: "Queen",
        album: "A Day At The Races"
    },
    {
        name: "Isn't She Lovely",
        artist: "Stevie Wonder",
        album: "Songs In The Key Of Life"
    },
    {
        name: "Biking",
        artist: "Frank Ocean, Jay-Z, Tyler, The Creator",
        album: "Biking"
    },
    {
        name: "Everybody",
        artist: "Logic",
        album: "Bobby Tarantino"
    }
]

export default class SongList extends React.Component{
    constructor(props){
        super(props);
        this.doesSongMatch = this.doesSongMatch.bind(this);
    }

    doesSongMatch(song){
        const searchVal = this.props.searchValue;
        

        return searchVal === '' || song.name.includes(searchVal) || song.artist.includes(searchVal) || song.album.includes(searchVal);
    }


    render(){
        //eslint-disable-next-line
        let renderSongs = songs.map(song => {
            if(this.doesSongMatch(song)){
                return (
                    <div>
                        <SongCard song={song}/>
                        <br/>
                    </div>
                )
            }
        })
        return(
            <div>
                {renderSongs}
            </div>
        )
    }
}