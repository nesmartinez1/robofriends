import React, { Component, useEffect, useState } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'

export default function App() {
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => setRobots(users))
    }, []) // empty array means run useEffect once (componentDidMount), [searchfield] means run use effect when searchfield changes

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    if (robots.length === 0) { // or if (!robots.length), you could also use a ternary operator here instead of if/else
        return <h1>Loading...</h1> // Loading component
    } else {
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                {/* <button onClick={() => setCount(count + 1)}>Click Me</button> */}
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );   
    }
}