import React, { Component } from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

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
        const filteredRobots = this.state.Robots.filter(Robot => {
            return Robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        if (this.state.Robots.length === 0) {
            return <h1>Loading</h1>
        } else {

            return (
                <div className={'tc'}>
                    <h1 className={'f2'}>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList Robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;