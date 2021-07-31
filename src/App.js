import React, { Component } from "react";
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component{
    constructor() {
        super()
        this.state = {
            Robots: [],
            searchField: ''
        }

    }

    //Extracts Data from source
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ Robots: users}));
    }

    onSearchChange = (event) =>{
        this.setState({ searchField: event.target.value})
    }

    render() {
        const filteredRobots = this.state.Robots.filter(Robots => {
            return Robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        if (this.state.Robots.length === 0) {
            return <h1>Loading</h1>
        } else {

            return (
                <div className={'tc'}>
                    <h1 className={'f2'}>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList Robots={filteredRobots}/>
                </div>
            );
        }
    }
}

export default App;