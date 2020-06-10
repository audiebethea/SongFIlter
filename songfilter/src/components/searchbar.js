import React from 'react';

export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {val : ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({val : event.target.value}, () => {
            this.props.handleSearchChange(this.state.val);
        })
    }

    render(){
        return(
            <input type='text' aria-label='Search' placeholder='Search...' onChange={this.handleChange}/>
        )
    }
}