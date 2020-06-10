import React from 'react';
import SearchBar from '../components/searchbar';
import SongList from '../components/songlist';

export default class Songs extends React.Component{
    constructor(props){
        super(props);
        this.state = {searchValue : 'aaaa'};
        this.handleSearchChange = this.handleSearchChange.bind(this);
    };

    handleSearchChange(val){
        this.setState({searchValue: val});
    }

    render(){
        return(
            <div>
                <h1>Here is our list of songs for you!</h1>
                <SearchBar 
                    handleSearchChange = {this.handleSearchChange}
                />
                <SongList 
                    searchValue = {this.state.searchValue}
                />
            </div>
        );
    }
}