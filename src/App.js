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
                <nav className="NavBar">
                   <div className="logo">Robo Friends</div>
                    <SearchBox SearchChange={this.OnSearchChange}/>
                </nav>
                <div className="CardBackground">
                  <CardList robots={FilteredRobots}/>
                </div>
            </div>
        );
    }
}
export default App;