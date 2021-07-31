import React, { Component } from "react";
import CardList from './CardList';
import SearchBox from './SearchBox';
import { Robots } from './Robots';
import './App.css';

class App extends Component{
    constructor() {
        super()
        this.state = {
            Robots: Robots,
            searchField: ''
        }
    }

    onSearchChange = (event) =>{
        this.setState({ searchField: event.target.value})
    }

    render() {
        const filteredRobots = this.state.Robots.filter(Robots =>{
            return Robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        return (
            <div className={'tc'}>
                <h1 className={'f2'}>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList Robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;