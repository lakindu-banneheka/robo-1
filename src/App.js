/* eslint-disable no-unused-vars */
import React,{Component} from 'react';
import CardList from './CardList';
import { robots } from "./robots";
import SearchBox from "./SearchField";
import './css/App.css'




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
                <div className="NavBar">
                   <h1>Robo Friends</h1>
                    <SearchBox SearchChange={this.OnSearchChange}/>
                </div>
                <div className="CardBackground">
                  <CardList robots={FilteredRobots}/>
                </div>
            </div>
        );
    }
}
export default App;