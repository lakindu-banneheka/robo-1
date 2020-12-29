/* eslint-disable no-unused-vars */
import React,{Component} from 'react';
import CardList from './CardList';
import { robots } from "./robots";
import SearchBox from "./SearchBox";




class App extends Component{
    constructor() {
        super()
        this.state ={
            robots:robots,
            searchfeild: '',
        }
    }
    OnSearchChange = (event) => {
        this.setState({searchfeild:event.target.value})
        
    }
    render(){
        const FilteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfeild.toLowerCase()) 
        })
        return (
            <div>
                <h1>Robo Friends</h1>
                <SearchBox SearchChange={this.OnSearchChange}/>
                <CardList robots={FilteredRobots}/>
            </div>
        );
    }
}
export default App;