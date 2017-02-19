import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			projects: []
		}
	}

	//Lifecycle method
	componentWillMount(){
		this.setState({projects: [
			{
				id: uuid.v4(),
				title: "Business Website",
				category: "Web Design"
			},
			{
				id: uuid.v4(),
				title: "Social App",
				category: "Mobile Dev"
			},
			{
				id: uuid.v4(),
				title: "Ecommerce Website",
				category: "Web Dev"
			}
		]});
	}

	//Updates projects array
	handleAddProject(project){
		let projects = this.state.projects;
		projects.push(project);
		this.setState({projects:projects})
	}

	handleOnDeleteProject(id){
		let projects = this.state.projects;
		let index = projects.findIndex(x => x.id === id);
		projects.splice(index, 1);
		this.setState({projects:projects})
	}

	render() {
	    return (
	      <div className="App">
	        <AddProject addProject={this.handleAddProject.bind(this)}/>
	        <Projects projects={this.state.projects} onDelete={this.handleOnDeleteProject.bind(this)}/>
	      </div>
	    );
	}
}

export default App;
