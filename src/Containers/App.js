import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css';

//STATE - THE DESCRIPTION OF YOUR APP (OBJECT THAT DESCRIBES THE APP) - ABLE TO CHANGE. lIVES IN THE APRENT COMPONENT.
//PROPS ARE SIMPLY THINGS THAT COME OUT OF STATE
//CONSTRUCTOR IS THE FUNCTION THAT IS CALLED WHEN YOU INITIALIZE A CLASS
//If the app has states, we call these smart components


class App extends Component {
    constructor() {
        super()
        this.state={
            robots: [],
            searchfield: ''
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }
     
    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value}) 
    }
    render () {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (!robots.length) ?
        <h1>Loading </h1> :
        (
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
            );
        }
    }

export default App;