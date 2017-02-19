import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos'
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			projects: [],
			todos: []
		}
		console.log("App Ready")
	}

	getTodos(){
		//http requests
		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/todos',
			dataType: 'json',
			cache: 'false',
			success: function(data){
				this.setState({todos: data}, function(){
					console.log(this.state);
				})
			}.bind(this),
			error: function(hxr, status, err){
				console.log(err);
			}
		});
	}

	getProjects(){
		this.setState({projects:[
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

	//Lifecycle method
	componentWillMount(){
		this.getProjects();
		this.getTodos();
	}

	componentDidMount(){
		this.getTodos();
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
					<hr />
					<Todos todos={this.state.todos} />
		  </div>
	    );
	}
}

export default App;
